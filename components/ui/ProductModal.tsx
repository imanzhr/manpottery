"use client";

import { useEffect, useCallback } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Product } from "@/types";

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (product) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
  }, [product, handleKeyDown]);

  if (!product) return null;

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={product.name}
        >
          <div
            className="absolute inset-0 bg-stone/60 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative bg-cream rounded-3xl overflow-hidden max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-cream/80 backdrop-blur-sm rounded-full p-2 hover:bg-cream transition-colors"
              aria-label="Close"
            >
              <X size={20} className="text-stone" />
            </button>

            <div className="relative aspect-[4/3] w-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>

            <div className="p-8 sm:p-10">
              <div className="flex items-start justify-between gap-4 mb-4">
                <h2 className="font-display text-2xl sm:text-3xl text-stone">
                  {product.name}
                </h2>
                <span className="text-terracotta font-display text-xl shrink-0">
                  {product.price}
                </span>
              </div>

              <p className="text-warm-gray leading-relaxed mb-8">
                {product.description}
              </p>

              <div className="grid grid-cols-2 gap-6 text-sm">
                <div>
                  <span className="font-medium text-stone block mb-1">
                    Dimensions
                  </span>
                  <span className="text-warm-gray">{product.dimensions}</span>
                </div>
                <div>
                  <span className="font-medium text-stone block mb-1">Material</span>
                  <span className="text-warm-gray">{product.material}</span>
                </div>
                <div className="col-span-2">
                  <span className="font-medium text-stone block mb-1">
                    Available Colors
                  </span>
                  <span className="text-warm-gray">
                    {product.colors.join(", ")}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
