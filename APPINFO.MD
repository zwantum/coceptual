# Google Cloud Console OAuth Configuration Details

Below is the exact information required to configure your OAuth Client ID in the Google Cloud Console for integration with Supabase.

## 1. OAuth Consent Screen Configuration
- **User Type**: External (or Internal if using a Google Workspace organization)
- **App Name**: `Conceptual Studio Admin`
- **User Support Email**: `your-admin-email@gmail.com`
- **Developer Contact Email**: `your-admin-email@gmail.com`
- **Scopes Requested**: `.../auth/userinfo.email`, `.../auth/userinfo.profile`, `openid`

---

## 2. Credentials Credentials Setup (OAuth Client ID)
- **Application Type**: `Web application`
- **Name**: `Conceptual Studio Supabase Auth`

### Authorized JavaScript Origins
Add the following URLs to allow requests from local development and production environments:
```text
http://localhost:3000
http://admin.localhost:3000
https://admin.mydomain.com
https://mydomain.com
```

### Authorized Redirect URIs
Add the following callback URL (from your Supabase Project):
```text
https://ohzzwjlbskeudaowormy.supabase.co/auth/v1/callback
```
*(Copy this exact link into the "Authorized redirect URIs" field in Google Console).*
