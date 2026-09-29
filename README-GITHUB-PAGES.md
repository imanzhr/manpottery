# راه‌اندازی روی GitHub Pages

این پروژه برای GitHub Pages آماده شده است.

1. یک Repository جدید در GitHub بسازید.
2. تمام فایل‌های داخل این ZIP را در ریشه Repository آپلود کنید.
3. مطمئن شوید شاخه اصلی `main` است.
4. به `Settings > Pages` بروید و در بخش `Build and deployment`، گزینه `GitHub Actions` را انتخاب کنید.
5. از تب `Actions` اجرای workflow با نام `Deploy Next.js site to GitHub Pages` را بررسی کنید.
6. بعد از Deploy، آدرس سایت در `Settings > Pages` نمایش داده می‌شود.

## دامنه شخصی

در `Settings > Pages > Custom domain` دامنه خود را وارد کنید و DNS دامنه را طبق مقادیر پیشنهادی GitHub تنظیم کنید. بعد از تنظیم دامنه، یک Push جدید یا اجرای دستی workflow انجام دهید تا build با مسیر صحیح دامنه شخصی ساخته شود.

> فایل `public/images/IMG_1824.PNG` عمداً حفظ شده است.
