# Frontend Deployment Instructions

## Build the frontend for Hostinger

1. Update the API endpoint to point to your Railway backend
2. Build the production version
3. Upload to Hostinger

## Steps:

### 1. After Railway deployment, update the contact form:
- Open `client/components/sections/Contact.tsx`
- Change `/api/contact` to `https://your-railway-app.railway.app/api/contact`

### 2. Build the frontend:
```bash
npm run build:client
```

### 3. Upload to Hostinger:
- The build files will be in the `dist/` folder
- Upload all files from `dist/` to your Hostinger `public_html` folder via FTP/File Manager
- Make sure to upload the `.htaccess` file for proper routing

### 4. Create `.htaccess` file (for React Router):
Place this in your `public_html` folder:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

### 5. Your website will be live at your Hostinger domain!
