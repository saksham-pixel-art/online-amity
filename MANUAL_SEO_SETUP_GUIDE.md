# 🚀 Manual SEO Setup Guide
**Amity University Online - Post-Deployment Tasks**

---

## 📋 TABLE OF CONTENTS
1. [Google Search Console Setup](#1-google-search-console-setup)
2. [Google Analytics 4 Setup](#2-google-analytics-4-setup)
3. [Bing Webmaster Tools Setup](#3-bing-webmaster-tools-setup)
4. [Google Business Profile Setup](#4-google-business-profile-setup)
5. [Schema Validation](#5-schema-validation)
6. [Monitoring & Tracking](#6-monitoring--tracking)

---

## 1. 🔍 GOOGLE SEARCH CONSOLE SETUP

### Why It's Important:
- Monitor how Google crawls and indexes your site
- Submit your sitemap for faster indexing
- See search performance data (clicks, impressions, rankings)
- Get alerts about indexing issues
- See which keywords bring traffic

### Step-by-Step Instructions:

#### **Step 1: Create Google Account (if needed)**
- Go to: https://accounts.google.com/signup
- Use a professional email (e.g., admin@amityonline.com or your work email)

#### **Step 2: Access Google Search Console**
1. Go to: https://search.google.com/search-console
2. Click **"Start Now"**
3. Sign in with your Google account

#### **Step 3: Add Your Property**
1. Click **"Add Property"** (or it will prompt you automatically)
2. You'll see two options:
   - **Domain** (recommended) - covers all subdomains and protocols
   - **URL Prefix** - covers only specific URL

**Choose: URL Prefix**
3. Enter: `https://amityonline.learnlith.in`
4. Click **Continue**

#### **Step 4: Verify Ownership**
Google will show 5 verification methods. Choose **HTML tag** (easiest for Next.js):

**Method: HTML Tag Verification**
1. Google will show you a meta tag like:
   ```html
   <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
   ```
2. **Copy the entire tag**
3. I'll add it to your website code (see implementation below)
4. Deploy the updated code
5. Return to Google Search Console and click **Verify**

#### **Step 5: Submit Your Sitemap**
1. After verification, go to **Sitemaps** in the left sidebar
2. Enter: `sitemap.xml`
3. Click **Submit**
4. Your sitemap URL will be: `https://amityonline.learnlith.in/sitemap.xml`

#### **Step 6: Request Indexing**
1. Go to **URL Inspection** in the left sidebar
2. Enter your homepage URL: `https://amityonline.learnlith.in`
3. Click **Request Indexing**
4. Repeat for important pages:
   - `https://amityonline.learnlith.in/about`
   - `https://amityonline.learnlith.in/contact`

### ⏰ Timeline:
- **Verification**: Immediate
- **First data**: 2-3 days
- **Full data**: 1-2 weeks

---

## 2. 📊 GOOGLE ANALYTICS 4 SETUP

### Why It's Important:
- Track visitor behavior (page views, sessions, bounce rate)
- See traffic sources (organic, direct, referral, social)
- Monitor conversions (form submissions)
- Understand user demographics
- Measure marketing campaign effectiveness

### Step-by-Step Instructions:

#### **Step 1: Create Google Analytics Account**
1. Go to: https://analytics.google.com
2. Click **"Start Measuring"** or **"Admin"** (bottom left)
3. Sign in with the same Google account used for Search Console

#### **Step 2: Set Up Account**
1. Click **"Create Account"**
2. **Account Name**: "Amity University Online"
3. Configure data sharing settings (recommended: check all boxes)
4. Click **Next**

#### **Step 3: Create Property**
1. **Property Name**: "Amity Online Website"
2. **Reporting Time Zone**: India (GMT+05:30)
3. **Currency**: Indian Rupee (INR)
4. Click **Next**

#### **Step 4: Business Information**
1. **Industry**: Education
2. **Business Size**: Choose appropriate size
3. **Intended Use**: Check relevant options (e.g., "Examine user behavior", "Measure advertising ROI")
4. Click **Create**
5. Accept Terms of Service

#### **Step 5: Set Up Data Stream**
1. Choose **Web**
2. **Website URL**: `https://amityonline.learnlith.in`
3. **Stream Name**: "Amity Online Main Site"
4. Click **Create Stream**

#### **Step 6: Get Measurement ID**
1. After creating the stream, you'll see:
   - **Measurement ID**: `G-XXXXXXXXXX` (starts with G-)
   - **Stream ID**: (numeric)
2. **COPY the Measurement ID** (you'll need this)

#### **Step 7: Configure Enhanced Measurement**
1. In the Web Stream Details, scroll to **Enhanced Measurement**
2. Make sure these are enabled (toggle on):
   - ✅ Page views
   - ✅ Scrolls
   - ✅ Outbound clicks
   - ✅ Site search
   - ✅ Form interactions
   - ✅ Video engagement

#### **Step 8: Set Up Events (Optional but Recommended)**
Configure custom events for form submissions:
1. Go to **Events** in the left sidebar
2. Click **Create Event**
3. Event name: `form_submission`
4. Parameters:
   - `form_name`: "enquiry_form"
   - `form_type`: "admission_enquiry"

---

## 3. 🔧 BING WEBMASTER TOOLS SETUP

### Why It's Important:
- Bing powers 10-15% of searches in India
- Used by Microsoft Edge (growing market share)
- Easy to set up if you have Google Search Console

### Step-by-Step Instructions:

#### **Step 1: Access Bing Webmaster Tools**
1. Go to: https://www.bing.com/webmasters
2. Sign in with Microsoft account (or create one)

#### **Step 2: Import from Google Search Console** (EASIEST METHOD)
1. Click **"Import from Google Search Console"**
2. Authorize Bing to access your GSC data
3. Select "Amity University Online" property
4. Click **Import**
5. Done! Your sitemap and settings will be automatically copied

#### **Alternative: Manual Setup**
1. Click **"Add a Site"**
2. Enter: `https://amityonline.learnlith.in`
3. Add sitemap: `https://amityonline.learnlith.in/sitemap.xml`
4. Verify ownership (use HTML tag method, similar to Google)

---

## 4. 🏢 GOOGLE BUSINESS PROFILE SETUP

### Why It's Important:
- Appear in Google Maps
- Show up in local search results
- Display business hours, contact info, reviews
- Boost local SEO (important for educational institutions)

### Step-by-Step Instructions:

#### **Step 1: Create Google Business Profile**
1. Go to: https://www.google.com/business
2. Click **"Manage Now"**
3. Sign in with your Google account

#### **Step 2: Enter Business Details**
1. **Business Name**: "Amity University Online"
2. **Category**: Choose "University" or "Educational Institution"
3. Click **Next**

#### **Step 3: Location**
Since this is an online university:
1. **Do you want to add a location customers can visit?**: 
   - If you have a physical office: Select **Yes** and enter address
   - If purely online: Select **No** → **I deliver goods and services to my customers**
2. **Service Area**: Select "India" or specific states

#### **Step 4: Contact Details**
1. **Phone**: +91-7037010407
2. **Website**: https://amityonline.learnlith.in
3. Click **Next**

#### **Step 5: Verification**
Google will send a postcard to your physical address (if provided) with a verification code.
- **Timeline**: 5-14 days
- Alternative: Some businesses qualify for instant verification via email or phone

#### **Step 6: Complete Your Profile**
After verification:
1. **Add photos**: Campus images, logo, program highlights
2. **Business Description**: 
   ```
   Amity University Online offers UGC-approved, WASC-accredited degree programs in MBA, BBA, MCA, and BCA. 100% online learning with flexible schedules, expert faculty, and dedicated placement support. Enroll now for the July 2026 batch!
   ```
3. **Services**: Add programs (MBA, BBA, MCA, BCA)
4. **Hours**: Add admission office hours
5. **Attributes**: Online classes, Distance learning

---

## 5. ✅ SCHEMA VALIDATION

### Why It's Important:
- Ensure structured data is error-free
- Maximize rich snippets in search results
- Verify Google can read your organization data

### Step-by-Step Instructions:

#### **Option 1: Google Rich Results Test**
1. Go to: https://search.google.com/test/rich-results
2. Enter your URL: `https://amityonline.learnlith.in`
3. Click **Test URL**
4. Check for:
   - ✅ Valid schemas detected
   - ✅ No errors or warnings
   - ✅ Preview of rich results

#### **Option 2: Schema.org Validator**
1. Go to: https://validator.schema.org
2. Enter your URL: `https://amityonline.learnlith.in`
3. Click **Run Test**
4. Review results for:
   - Organization schema
   - Course schemas
   - FAQ schema

#### **Option 3: Google Search Console**
After GSC is set up:
1. Go to **Enhancements** → **Structured Data**
2. View detected schemas
3. Check for errors/warnings
4. Monitor over time

---

## 6. 📈 MONITORING & TRACKING

### Daily/Weekly Tasks:

#### **Google Search Console (Check Weekly)**
- **Performance**: Clicks, impressions, CTR, average position
- **Coverage**: Indexing status, errors
- **Sitemaps**: Submission status
- **Mobile Usability**: Check for mobile issues

#### **Google Analytics 4 (Check Daily/Weekly)**
- **Realtime**: Current visitors
- **Acquisition**: Traffic sources
- **Engagement**: Page views, session duration
- **Conversions**: Form submissions

### Set Up Alerts:

#### **Google Search Console Alerts**
1. Go to **Settings** → **Users and Permissions**
2. Add email for alerts
3. You'll receive notifications for:
   - Critical crawl errors
   - Manual actions
   - Security issues

#### **Google Analytics 4 Custom Alerts**
1. Go to **Admin** → **Custom Insights**
2. Create alerts for:
   - Traffic drops > 20%
   - Zero conversions for 24 hours
   - Spike in 404 errors

---

## 🎯 VERIFICATION CHECKLIST

After completing all setups, verify:

### Week 1:
- [ ] Google Search Console verified
- [ ] Sitemap submitted and processed
- [ ] Google Analytics 4 tracking active
- [ ] First pageviews recorded in GA4
- [ ] Bing Webmaster Tools set up

### Week 2:
- [ ] Search Console shows indexed pages (at least homepage)
- [ ] GA4 shows 7 days of data
- [ ] Schema validation completed with no errors
- [ ] Google Business Profile created (pending verification)

### Week 4:
- [ ] 20+ pages indexed in GSC
- [ ] Search impressions appearing in GSC
- [ ] First search clicks recorded
- [ ] Conversion tracking working in GA4
- [ ] Google Business Profile verified

---

## 🚨 COMMON ISSUES & SOLUTIONS

### Issue 1: Google Search Console Verification Fails
**Solution**: 
- Ensure meta tag is in `<head>` section
- Clear browser cache and try again
- Wait 24 hours and retry
- Try alternative verification method (TXT record)

### Issue 2: Sitemap Shows "Couldn't Fetch"
**Solution**:
- Test sitemap URL directly: https://amityonline.learnlith.in/sitemap.xml
- Check server logs for 404 or 500 errors
- Verify robots.txt allows Googlebot
- Resubmit after fixing

### Issue 3: No Data in Google Analytics
**Solution**:
- Check if GA4 code is in website source (View Page Source → search for "G-")
- Verify Measurement ID is correct
- Test with GA4 DebugView (install GA Debugger Chrome extension)
- Check adblockers aren't blocking GA scripts

### Issue 4: Pages Not Indexing
**Solution**:
- Use URL Inspection tool in GSC
- Click "Request Indexing" for each page
- Check for crawl errors
- Verify canonical URLs are correct
- Wait 2-4 weeks (indexing takes time)

---

## 📞 SUPPORT RESOURCES

### Google Search Console Help:
- Help Center: https://support.google.com/webmasters
- Community: https://support.google.com/webmasters/community

### Google Analytics Help:
- Help Center: https://support.google.com/analytics
- YouTube Playlist: "Google Analytics for Beginners"

### SEO Monitoring Tools (Free):
- Google PageSpeed Insights: https://pagespeed.web.dev
- Mobile-Friendly Test: https://search.google.com/test/mobile-friendly
- Rich Results Test: https://search.google.com/test/rich-results

---

## 🎓 NEXT STEPS AFTER SETUP

1. **Content Creation**: Start publishing blog posts (5-10 initial posts)
2. **Link Building**: Submit to educational directories
3. **Social Media**: Share content on LinkedIn, Facebook, Twitter
4. **Monitor Rankings**: Track keyword positions weekly
5. **Analyze & Optimize**: Review GSC and GA4 data monthly

---

## 📊 EXPECTED TIMELINE

| Milestone | Timeline |
|-----------|----------|
| GSC Verification | Immediate |
| First indexed pages | 3-7 days |
| Sitemap processed | 1-2 weeks |
| Search impressions | 2-3 weeks |
| First organic clicks | 3-4 weeks |
| Consistent traffic | 6-8 weeks |
| Ranking improvements | 2-3 months |

---

**Document Created**: June 3, 2026  
**Last Updated**: June 3, 2026  
**Version**: 1.0

For technical questions, contact your web developer.  
For SEO strategy, consult your digital marketing team.
