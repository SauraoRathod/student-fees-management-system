# Google Apps Script – Master Sheet Automation

This Apps Script project automates consolidation of student data from multiple year-wise sheets into a single **Master Sheet** and keeps it sorted and clean.

---

## 📌 What This Script Does

- Collects data from all year sheets (example: 2024, 2025, 2026, etc.)
- Ignores system sheets:
  - Master Sheet
  - Template
  - Fee Alert Console
  - Config
- Clears old data safely
- Rebuilds Master Sheet from scratch
- Sorts data by **Admission Date (latest first)**
- Ensures Master Sheet contains no ghost / empty rows

---

## 📂 File Included

- `updateMasterSheet.gs`  
  → Main automation script

---

## 🧠 Sheet Structure Requirements

### Master Sheet
- Headers must start at **Row 2**
- Data starts from **Row 3**
- Columns must match the template exactly

### Source Sheets (Year-wise)
- Headers in Row 2
- Data from Row 3 onwards
- Same column order as Master Sheet

---

## ⏱ Trigger Configuration (IMPORTANT)

This script is designed to run using a **Time-Driven Trigger**.

### Recommended Trigger
- Event type: Time-driven
- Frequency: Every 15 or 30 minutes

### How to Add Trigger
1. Open Google Sheet
2. Extensions → Apps Script
3. Triggers (clock icon)
4. Add Trigger
5. Choose function: `updateMasterSheet`
6. Event source: Time-driven

---

## ❗ Do NOT Use On-Edit Trigger

Reasons:
- Prevents performance issues
- Avoids partial data sync
- Ensures consistent Master Sheet rebuild

---

## 🔁 How to Modify in Future

### Add / Remove Columns
- Update `headers` array in `updateMasterSheet.gs`
- Ensure all source sheets follow the same order

### Change Sort Logic
- Current sort column: **Admission Date (Column 16)**
- Change column number in `.sort()` if needed

### Exclude Additional Sheets
- Add sheet names in the exclusion condition

---

## 📊 Looker Studio Compatibility

- Looker Studio connects **only to Master Sheet**
- Script execution does NOT affect Looker configuration
- After copying spreadsheet, re-select data source in Looker

---

## 🚫 Deployment Information

- No Web App deployment required
- No API or OAuth configuration needed
- Script runs internally within Google Sheets

---

## ✅ Best Practices

- Do not manually insert rows in Master Sheet
- Do not change header row position
- Always duplicate Template sheet for new year data
- Keep triggers under one owner account

---

## 🧩 Troubleshooting

### Data not updating?
- Check trigger status
- Run script manually once

### Empty rows appearing?
- Do not manually delete Master Sheet rows
- Let script rebuild automatically

---

## 👤 Maintainer Notes

This project is designed for:
- Easy duplication
- Safe future modification
- GitHub version control (script only)

Sensitive data should never be committed.

---
