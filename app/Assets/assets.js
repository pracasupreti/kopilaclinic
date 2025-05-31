import adenomyosis from "./adenomyosis.jpg";
import antenatal from "./antenatal-checkup.jpg";
import endometriosis from "./endometriosis.jpg";
import iui from "./intrauterine-insemination.jpg";
import ivf from "./ivf.jpg";
import pcod from "./pcod.jpg";
import pid from "./pid.jpg";
import fibroids from "./uterine-fibroids.jpg";

export const blog_data = [
  {
    id: 1,
    slug: "antenatal-checkups",
    title: "Essential Antenatal Checkups for Healthy Pregnancy",
    excerpt:
      "Regular prenatal visits are crucial for monitoring both maternal and fetal wellbeing throughout pregnancy.",
     quotedText:"Ovulation induction can be a beacon of hope for couples facing infertility. It bridges the gap between aspiration and reality, bringing the dream of parenthood closer.",
    paragraphs: [
      {
        text: "Antenatal care is crucial for monitoring the health of both the mother and the baby throughout pregnancy. This blog highlights the significance of regular antenatal check-ups, the tests involved, and how they help prevent complications, ensuring a smooth and healthy pregnancy journey.",
      },
      {text:"Ovulation induction can be a beacon of hope for couples facing infertility. It bridges the gap between aspiration and reality, bringing the dream of parenthood closer.",isQuoted:true},

      {
        text: "Antenatal care is crucial for monitoring the health of both the mother and the baby throughout pregnancy. This blog highlights the significance of regular antenatal check-ups, the tests involved, and how they help prevent complications, ensuring a smooth and healthy pregnancy journey.",
      },
    ],
    description: `Antenatal checkups involve a series of medical examinations that help ensure a healthy pregnancy:


    **Key Components:**
    • Blood pressure monitoring
    • Weight tracking
    • Fetal heartbeat assessment
    • Ultrasound scans
    • Blood and urine tests
    
    **Recommended Schedule:**
    - Monthly until 28 weeks
    - Biweekly until 36 weeks
    - Weekly until delivery
    
    These visits help detect complications like gestational diabetes, preeclampsia, and fetal growth restrictions early.`,
    image: antenatal,
  },
  {
    id: 2,
    slug: "endometriosis",
    title: "Understanding Endometriosis: Symptoms & Treatments",
    excerpt:
      "When endometrial tissue grows outside the uterus, causing pain and fertility issues.",
    paragraphs: [],
    description: `Endometriosis affects 1 in 10 women and involves:

    **Common Symptoms:**
    • Severe menstrual cramps
    • Chronic pelvic pain
    • Painful intercourse
    • Heavy periods
    • Infertility (30-50% of cases)
    
    **Affected Areas:**
    - Ovaries (most common)
    - Fallopian tubes
    - Pelvic lining
    - Sometimes bladder/bowels
    
    **Treatment Options:**
    • Pain medications (NSAIDs)
    • Hormonal therapy
    • Laparoscopic surgery
    • Fertility treatments if needed`,
    image: endometriosis,
  },
  {
    id: 3,
    slug: "pelvic-inflammatory-disease",
    title: "Pelvic Inflammatory Disease: Risks & Prevention",
    excerpt:
      "Serious infection of female reproductive organs often caused by STIs.",
    paragraphs: [],
    description: `PID can lead to permanent damage if untreated:

    **Primary Causes:**
    • Untreated chlamydia/gonorrhea
    • Bacterial vaginosis
    • Post-procedure infections
    
    **Symptoms Include:**
    - Lower abdominal pain
    - Abnormal discharge
    - Fever/chills
    - Painful urination
    - Irregular bleeding
    
    **Potential Complications:**
    • Infertility
    • Ectopic pregnancy
    • Chronic pelvic pain
    • Tubo-ovarian abscess
    
    Early antibiotic treatment is essential to prevent long-term consequences.`,
    image: pid,
  },
  {
    id: 4,
    slug: "adenomyosis",
    title: "Adenomyosis: When Uterine Lining Grows Into Muscle",
    excerpt: "Condition causing painful periods and heavy bleeding.",
    paragraphs: [],
    description: `Adenomyosis occurs when endometrial tissue grows into the uterine muscle:

    **Key Characteristics:**
    • Enlarged, tender uterus
    • Severe dysmenorrhea
    • Menorrhagia (heavy bleeding)
    • Bloating/pressure
    
    **Diagnosis Methods:**
    - Transvaginal ultrasound
    - MRI (most accurate)
    - Sometimes only confirmed post-hysterectomy
    
    **Management Approaches:**
    • NSAIDs for pain
    • Hormonal IUDs
    • Uterine artery embolization
    • Hysterectomy (definitive cure)`,
    image: adenomyosis,
  },
  {
    id: 5,
    slug: "uterine-fibroids",
    title: "Uterine Fibroids: Non-Cancerous Growths Explained",
    excerpt: "Common tumors affecting up to 80% of women by age 50.",
    paragraphs: [],
    description: `Fibroids vary in size and location:

    **Types:**
    1. Submucosal (inside uterine cavity)
    2. Intramural (within uterine wall)
    3. Subserosal (outer uterine surface)
    
    **Symptoms May Include:**
    • Heavy menstrual bleeding
    • Pelvic pressure/pain
    • Frequent urination
    • Constipation
    • Reproductive issues
    
    **Treatment Options:**
    • Watchful waiting (asymptomatic cases)
    • Medications (tranexamic acid, GnRH agonists)
    • Myomectomy
    • Uterine artery embolization
    • Hysterectomy`,
    image: fibroids,
  },
  {
    id: 6,
    slug: "polycystic-ovary",
    title: "PCOS: Hormonal Imbalance & Fertility Challenges",
    excerpt: "Common endocrine disorder affecting reproductive-aged women.",
    paragraphs: [],
    description: `PCOS involves three main features:

    **Diagnostic Criteria (2/3 Required):**
    1. Irregular/absent ovulation
    2. Clinical/biochemical androgen excess
    3. Polycystic ovaries on ultrasound
    
    **Common Symptoms:**
    • Irregular periods
    • Hirsutism (excess hair)
    • Acne/oily skin
    • Weight gain
    • Insulin resistance
    
    **Management Strategies:**
    • Lifestyle modifications (weight loss)
    • Birth control pills (cycle regulation)
    • Metformin (insulin sensitizer)
    • Fertility medications when desired`,
    image: pcod,
  },
  {
    id: 7,
    slug: "intrauterine-insemination",
    title: "IUI: A Step-by-Step Guide to the Procedure",
    excerpt: "Less invasive fertility treatment option for selected couples.",
    paragraphs: [],
    description: `Intrauterine Insemination involves:

    **Process Steps:**
    1. Ovarian stimulation (optional)
    2. Sperm washing/preparation
    3. Catheter insertion
    4. Sperm deposition in uterus
    
    **Ideal Candidates:**
    • Unexplained infertility
    • Mild male factor
    • Cervical factor
    • Donor sperm cases
    
    **Success Rates:**
    - 10-20% per cycle with meds
    - 5-10% natural cycle
    - Best within 3-6 attempts
    
    **Advantages:**
    • Less invasive than IVF
    • More affordable
    • Minimal downtime`,
    image: iui,
  },
  {
    id: 8,
    slug: "in-vitro-fertilization",
    title: "IVF: The Complete Journey from Stimulation to Transfer",
    excerpt: "Advanced assisted reproductive technology for challenging cases.",
    paragraphs: [],
    description: `IVF involves multiple stages:

    **Treatment Phases:**
    1. Ovarian Stimulation (10-14 days)
    2. Egg Retrieval (30-min procedure)
    3. Fertilization (Conventional/ICSI)
    4. Embryo Culture (3-5 days)
    5. Embryo Transfer
    
    **Success Rates by Age:**
    • <35: 40-50%
    • 35-37: 30-40%
    • 38-40: 20-30%
    • >40: 10-15%
    
    **Potential Risks:**
    • Ovarian hyperstimulation
    • Multiple pregnancy
    • Ectopic pregnancy
    
    **Genetic Testing Options:**
    • PGT-A (aneuploidy screening)
    • PGT-M (monogenic disorders)`,
    image: ivf,
  },
];
