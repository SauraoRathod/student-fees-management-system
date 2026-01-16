---

# 🎓 Student Admission, Fees & Placement Management System

**Google Sheets + Apps Script + Looker Studio**

This project is a **complete automation and reporting system** for managing student admissions, fee collections, opt-outs, and placements using **Google Sheets**, **Google Apps Script**, and **Looker Studio**.

It is built around a **fixed Master Sheet structure** (defined below) and multiple year-wise data entry sheets.

---

## 📌 Master Sheet – Final Column Structure (Authoritative)

The entire system (scripts, formulas, Looker dashboards) depends on **this exact column order**:

```
SNO
INSTITUTE CODE
CANDIDATE NAME
CONTACT NO.
EMAIL ID
FATHER/MOTHER NAME
FATHER/MOTHER CONTACT NO.
CITY
COLLEGE NAME
QUALIFICATION
BRANCH
PASSOUT YEAR
COURSE NAME
TRAINING MODE
DATE OF BIRTH
ADMISSION DATE
TOTAL FEES CHARGED
TOTAL FEES RECEIVED
TOTAL FEES PENDING
BOOKING AMOUNT
INSTALLMENT 1
PAYMENT DATE (1)
PAYMENT MODE (1)
INSTALLMENT 2
PAYMENT DATE (2)
PAYMENT MODE (2)
INSTALLMENT 3
PAYMENT DATE (3)
PAYMENT MODE (3)
PAYMENT STATUS
OPT - OUT
PLACEMENT STATUS
PLACEMENT COMPANY NAME
Admission Month
Admission Quarter
Admission Year
```

⚠️ **Do NOT rename, reorder, or delete these columns** unless you also update:

* Apps Script
* QUERY formulas
* Looker Studio fields

---

## 📁 Project Structure (GitHub)

```
student-management-system/
│
├── apps-script/
│   ├── Code.gs
│   └── README.md
│
├── google-sheets/
│   ├── student_template.xlsx
│   └── column_structure.md
│
├── looker/
│   └── README.md
│
├── deployment/
│   └── README.md
│
└── README.md   ← (this file)
```

---

## 🔧 Technologies Used

* **Google Sheets** – Data entry & storage
* **Google Apps Script** – Automation & consolidation
* **Looker Studio** – Dashboards & analytics
* **GitHub** – Version control & documentation

---

## 🔄 How the System Works (End-to-End)

### 1️⃣ Year-wise Data Entry Sheets

* Each year (2025, 2026, 2027…) has its own sheet
* Data entry starts from **Row 3**
* Column structure matches the Master Sheet

---

### 2️⃣ Master Sheet (Auto-Generated)

* Created & updated by Apps Script
* Pulls data from all year sheets
* Automatically:

  * Removes old rows
  * Rebuilds clean dataset
  * Sorts by **ADMISSION DATE (latest first)**

📄 Script file → `apps-script/Code.gs`

---

### 3️⃣ Fee Alert Console

Uses `QUERY` on Master Sheet:

```excel
=QUERY('Master Sheet'!A2:AJ,
 "SELECT C, D, M, Q, R, S, AD", 1)
```

Displayed columns:

* Candidate Name
* Contact No.
* Course Name
* Total Fees Charged
* Total Fees Received
* Total Fees Pending
* Payment Status

An additional column generates WhatsApp reminders automatically:

```excel
=HYPERLINK(
 "https://wa.me/" & B3 &
 "?text=Hello%20" & A3 &
 "%2C%20This%20is%20a%20gentle%20reminder%20to%20complete%20your%20pending%20fees%20of%20" &
 F3 & "%2E",
 "Send Reminder"
)
```

---

### 4️⃣ Looker Studio Dashboard

* Connected directly to **Master Sheet**
* Supports:

  * KPIs (Admissions, Revenue, Pending Fees, Opt-outs)
  * Filters (Year, Month, Course, Institute Code)
  * Charts (Admissions trend, Revenue trend, Course-wise performance)
  * Placement & Opt-out analysis

📄 Looker documentation → `looker/README.md`

---

## 🚨 VERY IMPORTANT – Ownership & Credentials Rule

⚠️ **All of the following MUST belong to the SAME Google account**:

* Google Sheet (file owner)
* Apps Script project
* Apps Script triggers
* Looker Studio report
* Looker Studio data source credentials

If not, you WILL face errors like:

> **No dataset access**
> **Insufficient permissions to the underlying data**

This is a **design limitation of Google**, not a bug.

---

## ⏱ Automation & Triggers

* Script runs using **time-based trigger**
* Rebuilds Master Sheet safely
* No manual refresh needed

Triggers are **NOT copied** when duplicating the project
→ must be recreated manually

---

## 🔁 Making a Full Copy of This Project

When handing over or cloning:

1. Make a copy of the Google Sheet
2. Open **Extensions → Apps Script**
3. Paste `Code.gs`
4. Recreate triggers
5. Copy Looker Studio report
6. Reconnect data source
7. Set credentials = **Owner’s credentials**

📄 Detailed steps → `deployment/README.md`

---

## 🧪 Validation Checklist

* Add/edit/delete rows in year sheets
* Run `updateMasterSheet`
* Confirm:

  * No empty rows in Master Sheet
  * Sorting by Admission Date works
  * Fee Alert Console auto-expands
* Refresh Looker dashboard
* Verify slicers affect **all visuals**

---

## 📌 Best Practices

* Never type manually in Master Sheet
* Never delete header row (Row 2)
* Keep DATE columns formatted as Date
* Always add new logic via script or formulas
* Backup before major changes

---

## 🏁 Final Note

This project is **robust, scalable, and permission-sensitive**.

If something breaks:

* **90%** → ownership / credential mismatch
* **10%** → formula or script change

Always check **permissions first**.

---
