---

# 📊 Students Management Dashboard – Structure Document

## Dashboard Title

**STUDENTS MANAGEMENT DASHBOARD**

**Branding**

* Logo: **ADVANTO** (Top-left)
* Theme: Light background, blue accent colors
* Layout: Grid-based (Filters → KPIs → Charts)

---

## 1️⃣ Global Filter Controls (Top Section)

These filters apply to **ALL charts and KPIs** on the dashboard.

| Filter Name       | Data Source Column  | Control Type |
| ----------------- | ------------------- | ------------ |
| Admission Year    | `Admission Year`    | Dropdown     |
| Admission Quarter | `Admission Quarter` | Dropdown     |
| Admission Month   | `Admission Month`   | Dropdown     |
| Payment Status    | `PAYMENT STATUS`    | Dropdown     |
| Course Name       | `COURSE NAME`       | Dropdown     |

📌 **Placement:**
Single horizontal row below the dashboard title.

---

## 2️⃣ KPI Scorecards (Left Sidebar)

Vertical KPI panel aligned on the **left side**.

### KPI Cards Configuration

| KPI Title               | Metric                | Calculation                        |
| ----------------------- | --------------------- | ---------------------------------- |
| Total Revenue Collected | `TOTAL FEES RECEIVED` | SUM                                |
| Outstanding Receivables | `TOTAL FEES PENDING`  | SUM                                |
| Opt-Out Revenue Loss    | `TOTAL FEES CHARGED`  | SUM where `OPT - OUT = YES`        |
| Placement Rate (%)      | `PLACEMENT STATUS`    | (Placed ÷ Total Enrollments) × 100 |
| Total Enrollments       | `CANDIDATE NAME`      | COUNT                              |
| Total Students Placed   | `PLACEMENT STATUS`    | COUNT where `PLACED`               |

📌 **Formatting**

* Large bold numbers
* Minimal decimals
* Vertical stacking
* Card borders enabled

---

## 3️⃣ Admission Trend (Top-Center Chart)

### Chart Type

📈 **Line Chart**

### Configuration

| Setting          | Value                     |
| ---------------- | ------------------------- |
| Dimension        | `Admission Month`         |
| Metric           | Count of `CANDIDATE NAME` |
| Sort             | Month ascending           |
| Time Granularity | Month                     |
| Label            | Students Count            |

📌 **Purpose**
Shows month-wise student admissions trend.

---

## 4️⃣ Admission by Course (Top-Right Chart)

### Chart Type

🍩 **Donut Chart**

### Configuration

| Setting   | Value                     |
| --------- | ------------------------- |
| Dimension | `COURSE NAME`             |
| Metric    | Count of `CANDIDATE NAME` |
| Display   | Value on slices           |
| Legend    | Right side                |

📌 **Purpose**
Distribution of admissions across courses.

---

## 5️⃣ Revenue Trend (Bottom-Center Chart)

### Chart Type

📈 **Line Chart**

### Configuration

| Setting   | Value                        |
| --------- | ---------------------------- |
| Dimension | `Admission Month`            |
| Metric    | SUM of `TOTAL FEES RECEIVED` |
| Sort      | Month ascending              |
| Currency  | INR                          |
| Label     | Total Revenue Collected      |

📌 **Purpose**
Tracks monthly revenue performance.

---

## 6️⃣ Placement by Company (Bottom-Right Chart)

### Chart Type

🍩 **Donut Chart**

### Configuration

| Setting   | Value                       |
| --------- | --------------------------- |
| Dimension | `PLACEMENT COMPANY NAME`    |
| Metric    | Count of `CANDIDATE NAME`   |
| Filter    | `PLACEMENT STATUS = PLACED` |
| Legend    | Right side                  |

📌 **Purpose**
Shows placement distribution across companies.

---

## 7️⃣ Data Source Mapping

### Primary Data Source

**Google Sheet → Master Sheet**

### Required Columns Used

```
CANDIDATE NAME
COURSE NAME
ADMISSION DATE
Admission Month
Admission Quarter
Admission Year
TOTAL FEES CHARGED
TOTAL FEES RECEIVED
TOTAL FEES PENDING
PAYMENT STATUS
OPT - OUT
PLACEMENT STATUS
PLACEMENT COMPANY NAME
```

---

## 8️⃣ Dashboard Behavior Rules

* All charts respond to:

  * Admission Year
  * Quarter
  * Month
  * Payment Status
  * Course Name
* Date fields must be **DATE type**
* Revenue fields must be **NUMBER / CURRENCY**
* Placement & Opt-out logic handled via filters

---

## 9️⃣ Ownership & Credential Rule (Critical)

⚠️ **Looker Studio Data Source Credentials MUST be:**

```
Owner’s Credentials
```

And the **same Google account must own**:

* Google Sheet
* Apps Script
* Looker Studio report
* Looker Studio data source

Otherwise errors like:

> *No dataset access / Insufficient permissions*

---

## 🔟 Intended Audience

* Management
* Finance Team
* Admission Team
* Placement Team

---

## ✅ Summary

This dashboard provides:

* Real-time admission tracking
* Revenue & pending fee visibility
* Course performance insights
* Placement analytics
* Centralized decision-making

---

If you want next, I can:

* Convert this into **Looker Studio build checklist**
* Create **field-level formulas**
* Make **handover documentation for client**
* Draw **architecture diagram (Sheet → Script → Looker)**

Just say the word 👍
