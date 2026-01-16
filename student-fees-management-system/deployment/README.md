# Deployment Guide – Google Sheets + Looker Studio Project

This folder explains how the project is deployed, shared, copied, and restored.
No traditional software deployment is required for this project.

---

## 🚀 Deployment Overview

This project uses:
- Google Sheets (as database)
- Google Apps Script (for automation)
- Looker Studio (for dashboard)

There is NO server, NO hosting, and NO build process involved.
Everything runs inside Google Workspace.

---

## ✅ What “Deployment” Means Here

Deployment includes:
- Copying Google Sheets correctly
- Ensuring Apps Script triggers are active
- Reconnecting Looker Studio data sources
- Aligning ownership & credentials
- Fixing permission-related issues

---

## 🔐 IMPORTANT: Credentials & Ownership (CRITICAL)

⚠️ **Google Sheet owner, Apps Script owner, and Looker Studio data source owner
MUST be the SAME Google account**

If ownership is mismatched, the dashboard WILL break.

### Why this matters
- Looker Studio uses the **credentials of the data source owner**
- Apps Script runs using the **script owner’s permissions**
- Moving files across Drives can silently revoke access

### Best Practice
Use **ONE Google account** to:
- Own the Google Sheet
- Own the Apps Script project
- Own the Looker Studio report & data source

---

## 📋 Initial Deployment Steps (Fresh Setup)

### 1️⃣ Google Sheet
- File → Make a copy
- Ensure all sheets exist:
  - Master Sheet
  - Template
  - Fee Alert Console
  - Config
  - Year-wise sheets (e.g. 2024, 2025)

- Confirm YOU are the **Owner** of the copied Sheet

---

### 2️⃣ Apps Script
- Extensions → Apps Script
- Verify `updateMasterSheet()` exists
- Run it once manually to authorize
- Ensure script owner = sheet owner

---

### 3️⃣ Triggers (MANDATORY)
Triggers do NOT copy automatically.

- Apps Script → Triggers
- Add **Time-driven trigger**
- Function: `updateMasterSheet`
- Frequency: 15 or 30 minutes
- Ensure trigger runs under **same owner account**

---

## 📊 Looker Studio Deployment

### First-Time Setup
- File → Make a copy of Looker report
- When prompted, **change data source**
- Select:
  - Copied Google Sheet
  - Master Sheet tab
- Choose:
  ✔️ “Use owner’s credentials”
- Apply to all pages

---

## 🔄 Reconnecting Data Source (MOST COMMON FIX)

If data stops showing:

1. Open Looker Studio
2. Resource → Manage added data sources
3. Edit → Reconnect
4. Select the copied Google Sheet
5. Confirm:
   - Owner is same Google account
   - Credentials = Owner’s credentials
6. Refresh fields
7. Apply changes

---

## ❌ Common Cause of Dashboard Failure

| Action | Result |
|------|-------|
| Sheet moved to another Drive | ❌ Data breaks |
| Ownership not transferred | ❌ Permission error |
| Looker uses viewer credentials | ❌ No dataset access |
| Script owned by different user | ❌ Automation fails |

---

## 🔁 Copying the Project (Correct Way)

### Google Sheet
- File → Make a copy
- Do NOT move original
- Confirm ownership

### Looker Studio
- File → Make a copy
- Reconnect to new Sheet
- Change credentials to owner

⚠️ Triggers must be recreated manually

---

## 🧪 Testing Deployment

After setup:
1. Add a test row in any year sheet
2. Run script OR wait for trigger
3. Verify Master Sheet updates
4. Confirm Looker dashboard reflects data

---

## 🧩 Common Errors & Fixes

### “No dataset access”
Cause:
- Wrong credentials
- Sheet owner mismatch
Fix:
- Reconnect data source
- Use owner’s credentials
- Check Drive permissions

### Script not running
- Trigger missing
- Authorization expired
- Owner mismatch

---

## 📝 GitHub Notes

- GitHub stores ONLY:
  - Documentation
  - Apps Script (.gs files)
- Google Sheets & Looker files are NOT stored in GitHub
- This folder exists for operational clarity

---

## 👤 Maintainer Notes

Golden Rule:
> **One owner account = zero permission issues**

Always check ownership before debugging anything else.

---
