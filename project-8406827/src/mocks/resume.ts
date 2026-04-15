export const profile = {
  name: "Layla Tang",
  title: "Business Analyst & Retail Operations Strategist",
  tagline: "我相信，最好的決策不再只是有冰冷的數字，更要有解決真實問題的溫度。",
  intro: "具備近 7 年大型跨國零售品牌通路營運管理經驗，致力於將複雜數據轉譯為具體行動方案，驅動企業營收成長與優化成本的戰略分析橋樑。",
  email: "lala850307@gmail.com",
  phone: "0970-704-492",
  github: "https://github.com/lala850307-glitch",
  location: "Taiwan",
  keywords: [
    "3.8億營收目標管理",
    "140間門市人力配置導入",
    "530小時AI全端訓練",
    "7年跨國零售管理經驗",
  ],
};

export const coreTraits = [
  {
    title: "謹慎與完美要求",
    desc: "面對 3.8 億元業績目標時，我對數據精準度有強烈苛求，確保每一份報表都能成為優先的決策基礎。",
  },
  {
    title: "團隊合作與溝通協調",
    desc: "獲總公司評定為唯一「0 複評」區域經理。我對細節的追求與責任感帶入團隊協作，確保活動從底層溝通到最終成果交付皆符合最高品質規格與團隊和諧。",
  },
  {
    title: "持續學習的活潑動力",
    desc: "在數據分析中發現數據能發現肉眼無法察覺的營運盲點，對此產生了對數據分析與 AI 強烈的興趣，加入 AI 全端培訓，追求如何用迅速準確、更具數據邏輯的方式解決問題。",
  },
];

export const stats = [
  { value: "3.8億", label: "營收目標管理" },
  { value: "140", label: "門市人力配置" },
  { value: "530", label: "AI訓練時數" },
  { value: "7", label: "年跨國零售經驗" },
];

export const skillGroups = [
  {
    id: 1,
    category: "商業分析與數據洞察",
    categoryEn: "Business Analytics",
    skills: ["Power BI", "Tableau", "Excel", "SQL", "MongoDB", "PostgreSQL", "Oracle", "市場趨勢預估"],
  },
  {
    id: 2,
    category: "AI 數據工程",
    categoryEn: "AI & Data Engineering",
    skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Prompt Engineering", "LLM應用", "自動化流程"],
  },
  {
    id: 3,
    category: "零售營運管理",
    categoryEn: "Retail Operations",
    skills: ["通路策略規劃", "人力資源配置", "KPI 績效管理", "供應鏈優化", "門市稽核", "跨部門協作", "專案管理", "成本控管"],
  },
];

export const experiences = [
  {
    id: 1,
    company: "黛安芬國際股份有限公司",
    role: "District Manager",
    period: "2024.11 — 2025.09",
    stores: "42間門市",
    highlights: [
      { text: "門市人力配置最佳化專案：清洗歷史班表與業績數據，精準對齊時段流量與兼職需求，", accent: "獲人資長認可執行全台 140 間店鋪運行。" },
      { text: "CRM 數據洞察：深度挖掘顧客消費模式與生命週期數據，比對歷史銷售表現與量販體系潛在產值，產出洞察分析報告。", accent: "" },
      { text: "進階樞紐分析：深度挖掘各店點客群輪廓獨特性，優化商品訂單與庫存分配策略，精準對齊區域需求，", accent: "成功於母親節檔期驅動整體業績逾 15% 之強勢成長。" },
    ],
    tags: ["人力配置", "CRM分析", "樞紐分析", "庫存策略"],
  },
  {
    id: 2,
    company: "Quiksilver Retail Taiwan",
    role: "Retail Operations Supervisor",
    period: "2023.12 — 2024.11",
    stores: "16間門市",
    highlights: [
      { text: "百貨、門市、outlet 三大通路管理，", accent: "達成 1.3 億元年度業績目標，", text2: "透過數據報表精準拆解銷售趨勢。" },
      { text: "主導端到端 (E2E) 展店專案，負責進度協調與硬體建置，確保店鋪如期順利開幕。", accent: "" },
    ],
    tags: ["通路管理", "數據報表", "展店專案", "E2E"],
  },
  {
    id: 3,
    company: "福福股份有限公司（Nike 經銷）",
    role: "營運督導",
    period: "2022.09 — 2023.11",
    stores: "17間門市",
    highlights: [
      { text: "深度分析銷售數據以制定商業策略，成功達成 ", accent: "3.8 億年度業績目標。", text2: "" },
      { text: "連續三場特賣會創下業績", accent: "突破 700 萬元紀錄。", text2: "" },
    ],
    tags: ["業績管理", "銷售分析", "特賣活動", "商業策略"],
  },
];

export const projects = [
  {
    id: 1,
    title: "大台北房地產價格預測與投資風險決策模型",
    category: "Machine Learning",
    year: "2025",
    description: "作為專案經理 (PM)，運用甘特圖控管 4 人團隊進度。採用 LightGBM 分位數回歸建模，MAPE 達 11.3%。成功將繁雜資料轉化為具備獨立域名的動態估價網站。",
    tags: ["LightGBM", "Python", "分位數回歸", "PM"],
    image: "https://readdy.ai/api/search-image?query=real%20estate%20data%20analytics%20dashboard%20machine%20learning%20prediction%20model%20minimal%20dark%20interface%20Taiwan%20city%20map%20visualization&width=800&height=500&seq=rp1&orientation=landscape",
    featured: true,
    metric: "MAPE 11.3%",
    highlights: [
      { label: "AI", desc: "分位數回歸 (P10/P50/P90) 推算市場合理成交底價" },
      { label: "API", desc: "串接政府實價登錄 API，自動化數據清洗與更新" },
      { label: "PM", desc: "甘特圖控管 4 人團隊，確保專案如期交付" },
    ],
  },
  {
    id: 2,
    title: "零售人力配置最佳化系統",
    category: "Data Engineering",
    year: "2024",
    description: "清洗歷史班表與業績數據，精準對齊時段流量與兼職需求，建立智能排班模型，獲人資長認可推廣至全台 140 間店鋪執行。",
    tags: ["Python", "Excel", "Power BI", "人力資源"],
    image: "https://readdy.ai/api/search-image?query=retail%20workforce%20scheduling%20optimization%20data%20dashboard%20minimal%20clean%20dark%20analytics%20business%20intelligence%20store%20management&width=800&height=500&seq=rp2&orientation=landscape",
    featured: true,
    metric: "140 間門市",
    highlights: [
      { label: "規模", desc: "推廣至全台 140 間店鋪" },
      { label: "工具", desc: "Python 數據清洗 + Power BI 視覺化" },
      { label: "成果", desc: "獲人資長認可全面執行" },
    ],
  },
  {
    id: 3,
    title: "CRM 顧客生命週期分析報告",
    category: "Business Analytics",
    year: "2024",
    description: "深度挖掘 CRM 系統中的顧客消費模式與生命週期數據，比對歷史銷售表現與量販體系潛在產值，產出洞察分析報告支援決策。",
    tags: ["CRM", "SQL", "Tableau", "顧客分析"],
    image: "https://readdy.ai/api/search-image?query=CRM%20customer%20lifecycle%20analytics%20dashboard%20minimal%20dark%20clean%20data%20visualization%20business%20report%20retail%20consumer%20behavior&width=800&height=500&seq=rp3&orientation=landscape",
    featured: false,
    metric: "",
    highlights: [],
  },
  {
    id: 4,
    title: "母親節檔期商品庫存分配策略",
    category: "Business Analytics",
    year: "2024",
    description: "深度挖掘各店點客群輪廓獨特性，優化商品訂單與庫存分配策略，精準對齊區域需求，成功驅動整體業績逾 15% 強勢成長。",
    tags: ["樞紐分析", "Excel", "庫存管理", "業績成長"],
    image: "https://readdy.ai/api/search-image?query=inventory%20management%20strategy%20retail%20analytics%20minimal%20clean%20data%20dashboard%20product%20allocation%20business%20growth%20chart&width=800&height=500&seq=rp4&orientation=landscape",
    featured: false,
    metric: "+15% 業績成長",
    highlights: [],
  },
  {
    id: 5,
    title: "Power BI 全台交通事故診斷儀表板",
    category: "Data Visualization",
    year: "2025",
    description: "處理全台逾 3.1 萬筆傷亡數據，運用 Power BI 建置包含互動式地圖、小倍數圖與連動切片器的診斷儀表板。深掘高達 56% 致死率之成因，精準定位「6月/12月」與「深夜時段」為高致命風險熱區，揪出西部走廊都會區為絕對死傷熱點，並提出三大治理對策。",
    tags: ["Power BI", "數據視覺化", "互動式地圖", "根因分析"],
    image: "https://readdy.ai/api/search-image?query=Taiwan%20traffic%20accident%20data%20Power%20BI%20dashboard%20dark%20interactive%20heatmap%20fatality%20statistics%20road%20safety%20analytics%20minimal%20professional&width=800&height=500&seq=rp5&orientation=landscape",
    featured: false,
    metric: "3.1萬筆數據",
    highlights: [
      { label: "視覺化", desc: "互動式地圖、小倍數圖與連動切片器，多維度剖析全台事故分布" },
      { label: "洞察", desc: "定位 6月/12月 與深夜時段為高致命熱區，56% 致死率根因診斷" },
      { label: "決策", desc: "提出精準執法、基礎設施優化、分眾宣導三大治理對策" },
    ],
  },
  {
    id: 6,
    title: "Tableau 電力品質與節能診斷儀表板",
    category: "Data Visualization",
    year: "2025",
    description: "運用 Tableau 建置雙軸分析圖與 24 小時功率趨勢圖，對比信義區大型商辦與高雄三民區住宅的用電規模、行為模式與功率因數 (PF) 表現。洞察商辦高負載持續時間長導致熱累積（最高溫高出 4°C），提出功因補償優化戰略決策。",
    tags: ["Tableau", "電力分析", "功率因數", "節能優化"],
    image: "https://readdy.ai/api/search-image?query=electricity%20power%20quality%20Tableau%20dashboard%20energy%20monitoring%20dual%20axis%20chart%2024%20hour%20trend%20dark%20minimal%20analytics%20professional%20clean&width=800&height=500&seq=rp6&orientation=landscape",
    featured: false,
    metric: "PF 風險診斷",
    highlights: [
      { label: "視覺化", desc: "雙軸分析圖 + 24小時功率趨勢圖，對比商辦與住宅用電行為模式" },
      { label: "洞察", desc: "信義商辦熱累積最高溫高出 4°C，陷入熱損耗與電阻增加惡性循環" },
      { label: "決策", desc: "提出優先針對信義區進行功因補償優化，降低營運與設備維護成本" },
    ],
  },
];
