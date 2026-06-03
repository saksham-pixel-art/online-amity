# ✅ Quick Setup Checklist - Manual SEO Tasks
**Amity University Online**

---

## 🎯 PRIORITY ORDER (Do in this sequence)

---

### ✅ **TASK 1: Google Search Console** (⏱️ 15 minutes)
**Why**: Most important for getting indexed by Google

**Steps**:
1. ✅ Go to: https://search.google.com/search-console
2. ✅ Sign in with Google account
3. ✅ Click "Add Property" → Choose "URL Prefix"
4. ✅ Enter: `https://amityonline.learnlith.in`
5. ✅ Select "HTML tag" verification method
6. ✅ **Copy the meta tag Google gives you** (looks like: `<meta name="google-site-verification" content="abc123...">`)
7. ✅ Open `src/app/layout.tsx` in your code
8. ✅ Find line 406 (search for "YOUR_GOOGLE_VERIFICATION_CODE")
9. ✅ Replace the commented line with your actual meta tag
10. ✅ Save, build, and deploy the updated code
11. ✅ Return to Google Search Console and click "Verify"
12. ✅ After verification, go to "Sitemaps" → Enter: `sitemap.xml` → Click "Submit"

**Verification**:
- ✅ GSC dashboard shows "Property Verified"
- ✅ Sitemap status shows "Success"

---

### ✅ **TASK 2: Google Analytics 4** (⏱️ 20 minutes)
**Why**: Track visitors and conversions

**Steps**:
1. ✅ Go to: https://analytics.google.com
2. ✅ Sign in (use same Google account as GSC)
3. ✅ Click "Admin" (bottom left) → "Create Account"
4. ✅ Account Name: "Amity University Online" → Next
5. ✅ Property Name: "Amity Online Website"
6. ✅ Time Zone: India (GMT+05:30) → Currency: INR → Next
7. ✅ Industry: Education → Next
8. ✅ Accept Terms of Service
9. ✅ Choose "Web" → Enter URL: `https://amityonline.learnlith.in`
10. ✅ Stream Name: "Amity Online Main Site" → Create Stream
11. ✅ **COPY your Measurement ID** (format: G-XXXXXXXXXX)
12. ✅ Open `src/app/layout.tsx` in your code
13. ✅ Find lines 411-428 (Google Analytics section)
14. ✅ Uncomment the code (remove `{/*` and `*/}`)
15. ✅ Replace BOTH instances of `GA_MEASUREMENT_ID` with your actual ID
16. ✅ Save, build, and deploy
17. ✅ Go back to GA4 → Turn on "Enhanced Measurement" (toggle should be ON)

**Verification**:
- ✅ Visit your website
- ✅ In GA4, go to "Reports" → "Realtime"
- ✅ You should see "1 user in the last 30 minutes"

---

### ✅ **TASK 3: Bing Webmaster Tools** (⏱️ 5 minutes)
**Why**: Get indexed by Bing/Microsoft search

**Steps**:
1. ✅ Go to: https://www.bing.com/webmasters
2. ✅ Sign in with Microsoft account
3. ✅ Click "Import from Google Search Console"
4. ✅ Authorize Bing
5. ✅ Select "Amity University Online" → Import
6. ✅ Done! (It automatically copies everything from GSC)

**Verification**:
- ✅ Bing dashboard shows your site
- ✅ Sitemap is automatically imported

---

### ✅ **TASK 4: Validate Schemas** (⏱️ 5 minutes)
**Why**: Ensure structured data is working correctly

**Steps**:
1. ✅ Go to: https://search.google.com/test/rich-results
2. ✅ Enter: `https://amityonline.learnlith.in`
3. ✅ Click "Test URL"
4. ✅ Check for GREEN checkmarks (no errors)
5. ✅ Also test: https://validator.schema.org

**Verification**:
- ✅ No errors shown
- ✅ All schemas detected: Organization, Course, FAQ, WebSite

---

### ✅ **TASK 5: Request Indexing** (⏱️ 10 minutes)
**Why**: Speed up Google indexing

**Steps**:
1. ✅ In Google Search Console, go to "URL Inspection"
2. ✅ Enter: `https://amityonline.learnlith.in` → Press Enter
3. ✅ Click "Request Indexing"
4. ✅ Repeat for these pages:
   - `https://amityonline.learnlith.in/about`
   - `https://amityonline.learnlith.in/contact`
   - `https://amityonline.learnlith.in/privacy-policy`
   - `https://amityonline.learnlith.in/terms-and-conditions`

**Verification**:
- ✅ Each page shows "Indexing requested"
- ✅ Wait 3-7 days for Google to index

---

### ⏳ **TASK 6: Google Business Profile** (⏱️ 30 minutes + verification wait)
**Why**: Appear in Google Maps and local search

**Steps**:
1. ✅ Go to: https://www.google.com/business
2. ✅ Click "Manage Now" → Sign in
3. ✅ Business Name: "Amity University Online"
4. ✅ Category: "University"
5. ✅ Add location (if you have physical office) OR
6. ✅ Select "I deliver goods and services" → Service Area: India
7. ✅ Phone: +91-7037010407
8. ✅ Website: https://amityonline.learnlith.in
9. ✅ Complete verification (postcard or phone)

**Verification**:
- ⏳ Wait 5-14 days for verification
- ✅ Once verified, complete profile with photos and description

---

## 📊 MONITORING DASHBOARD

### Check Daily (First Week):
- **Google Analytics**: https://analytics.google.com
  - Go to "Reports" → "Realtime" → Check active users
  - Go to "Reports" → "Engagement" → Check page views

### Check Weekly:
- **Google Search Console**: https://search.google.com/search-console
  - Check "Coverage" → Indexed pages count
  - Check "Performance" → Clicks and impressions
  - Check "Sitemaps" → Status

### Check Monthly:
- **Rankings**: Search "online MBA India Amity" on Google
- **Indexing**: Search "site:amityonline.learnlith.in" on Google
- **Competitors**: Check who ranks for your target keywords

---

## 🚨 CODE CHANGES NEEDED

### Change 1: Google Search Console Verification
**File**: `src/app/layout.tsx`  
**Line**: ~406  
**Action**: Uncomment and add your verification code

**Before**:
```tsx
{/* <meta name="google-site-verification" content="YOUR_GOOGLE_VERIFICATION_CODE" /> */}
```

**After** (replace with your actual code from GSC):
```tsx
<meta name="google-site-verification" content="abc123xyz456..." />
```

---

### Change 2: Google Analytics 4 Tracking
**File**: `src/app/layout.tsx`  
**Lines**: ~411-428  
**Action**: Uncomment and replace GA_MEASUREMENT_ID with your actual ID

**Before**:
```tsx
{/* <script
  async
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
/>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: window.location.pathname,
        send_page_view: true
      });
    `,
  }}
/> */}
```

**After** (replace GA_MEASUREMENT_ID with your actual G-XXXXXXXXXX):
```tsx
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-ABC123XYZ"
/>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-ABC123XYZ', {
        page_path: window.location.pathname,
        send_page_view: true
      });
    `,
  }}
/>
```

---

### Change 3 (Optional): Bing Verification
**File**: `src/app/layout.tsx`  
**Line**: ~407  
**Action**: Only if you manually set up Bing (not needed if you imported from GSC)

**Before**:
```tsx
{/* <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION_CODE" /> */}
```

**After**:
```tsx
<meta name="msvalidate.01" content="YOUR_ACTUAL_CODE" />
```

---

## 🎯 SUCCESS CRITERIA

### Week 1:
- ✅ Google Search Console verified
- ✅ Sitemap submitted and showing "Success"
- ✅ Google Analytics showing live data
- ✅ Schemas validated with no errors

### Week 2:
- ✅ At least 5 pages indexed in GSC
- ✅ First search impressions appearing
- ✅ GA4 showing 7 days of data

### Week 4:
- ✅ 10+ pages indexed
- ✅ Search impressions > 100
- ✅ First organic clicks
- ✅ Google Business Profile verified

### Month 2-3:
- ✅ Ranking in top 50 for target keywords
- ✅ Organic traffic > 50 visitors/day
- ✅ Conversions tracked in GA4

---

## 📞 NEED HELP?

### Common Issues:

**❌ GSC verification fails**
- Wait 24 hours after deploying code
- Clear browser cache
- Check if meta tag is in page source (right-click → View Page Source)

**❌ GA4 not showing data**
- Check if GA_MEASUREMENT_ID is correct (no typos)
- Disable adblockers
- Wait 30 minutes after deployment
- Test in incognito mode

**❌ Sitemap not found**
- Visit directly: https://amityonline.learnlith.in/sitemap.xml
- Should show XML structure
- If 404, rebuild and redeploy

**❌ Pages not indexing**
- Be patient (takes 1-4 weeks)
- Use "Request Indexing" in GSC
- Check robots.txt allows crawling

---

## 📁 USEFUL LINKS

- ✅ Google Search Console: https://search.google.com/search-console
- ✅ Google Analytics: https://analytics.google.com
- ✅ Bing Webmaster: https://www.bing.com/webmasters
- ✅ Schema Validator: https://validator.schema.org
- ✅ Rich Results Test: https://search.google.com/test/rich-results
- ✅ PageSpeed Insights: https://pagespeed.web.dev
- ✅ Mobile-Friendly Test: https://search.google.com/test/mobile-friendly

---

**Created**: June 3, 2026  
**Last Updated**: June 3, 2026  
**Estimated Total Time**: ~90 minutes

---

## 🎓 BONUS TIP

After completing all tasks, set up weekly reminders:
- **Monday**: Check GSC for errors
- **Wednesday**: Review GA4 traffic
- **Friday**: Monitor keyword rankings

Good luck! 🚀
