// 滋賀・琵琶湖エリア お気に入り飲食店データ
// ※ 店舗データは restaurants.json で管理しています

��北野1丁目1-20",
    tel: "077-514-9111",
    access: "JR琵琶湖線 野洲駅 北口 徒歩3分",
    image: "images/murasaki.jpg",
    url: "https://sousaku-murasaki.com/",
    features: ["近江牛A5ランク使用", "新鮮な活魚", "お昼の贅沢御膳", "大小個室・接待向け"]
  },
  {
    id: 7,
    name: "もりや",
    area: "草津・南草津",
    genre: "居酒屋・バル",
    budget: "￥3,000～￥3,999",
    description: "南草津にある「お食事メイン」と「お酒メイン」の2つの顔を持つハイブリッドな居酒屋。仕事帰りの一杯から、しっかりとした晩ご飯まで幅広く対応。豊富な居酒屋メニューと心地よいサービスが常連客に愛されています。",
    address: "滋賀県草津市野路1丁目12-28",
    tel: "077-565-8235",
    access: "JR琵琶湖線 南草津駅 東口 徒歩4分",
    image: "images/moriya.jpg",
    url: "https://tabelog.com/shiga/A2502/A250201/25008235/",
    features: ["南草津の人気店", "ご飯利用も大歓迎", "喫煙席あり", "アットホームなサービス"]
  },
  {
    id: 8,
    name: "肉と天ぷら 石山NIKUKAPPOU",
    area: "石山",
    genre: "焼鳥・肉料理",
    budget: "￥4,000～￥4,999",
    description: "石山駅前の肉割烹居酒屋。視覚的にも圧倒される名物『肉曼荼羅（にくまんだら）』や、極厚の『生牛タン塊ステーキ』、さらにサクサク軽い食感の『創作天ぷら』が看板メニュー。贅沢な食材をカジュアルに楽しめます。",
    address: "滋賀県大津市粟津町4-10",
    tel: "077-533-2228",
    access: "京阪石山坂本線 京阪石山駅 徒歩1分 / JR石山駅 徒歩2分",
    image: "images/nikukappou.jpg",
    url: "https://tabelog.com/shiga/A2501/A250101/25009945/",
    features: ["名物肉曼荼羅", "極厚牛タンステーキ", "揚げたて創作天ぷら", "石山駅近の好立地"]
  },
  {
    id: 9,
    name: "さかなと炭火 魚太朗",
    area: "近江八幡",
    genre: "魚介・海鮮",
    budget: "￥3,000～￥3,999",
    description: "近江八幡の地で愛される魚料理専門の居酒屋。その日仕入れた新鮮な魚を炭火で丁寧に焼き上げた炭火焼きや、旬の魚のお造り盛り合わせが絶品。カウンター席でひとりでも気軽に立ち寄れる落ち着いた雰囲気。個室（最大12名）もあり、宴会にも対応。",
    address: "滋賀県近江八幡市出町411-9",
    tel: "0748-43-2800",
    access: "JR東海道本線 近江八幡駅 北口 徒歩約7分",
    image: "images/uotaro.jpg",
    url: "https://hachiman-uotaro.owst.jp/",
    features: ["日替わり新鮮魚", "炭火焼き", "お造り盛り合わせ", "個室あり（最大12名）"]
  },
  {
    id: 10,
    name: "すし処 一魚一会",
    area: "近江八幡",
    genre: "魚介・海鮮",
    budget: "￥1,000～￥1,999",
    description: "近江八幡市・江頭町にある寿司と海鮮料理の店。ランチから充実しており、豪快な海鮮丼「海鮮ぎょんのギョギョ」や各種刺身定食など、海なし県・滋賀で本格的な魚介を堪能できると地元客に人気。夜は会席料理も楽しめる隠れた名店。",
    address: "滋賀県近江八幡市江頭町443",
    tel: "0748-36-6177",
    access: "JR東海道本線 近江八幡駅より車で約5分",
    image: "images/ichigyo.jpg",
    url: "https://tabelog.com/shiga/A2503/A250301/25013426/",
    features: ["豪快な海鮮丼", "新鮮お刺身定食", "ランチ15時まで", "会席料理あり"]
  }
// 外部JSONファイルから読み込む店舗データ
let restaurants = [];

// 状態管理
let currentAreaFilter = "all";
let currentGenreFilter = "all";

// DOM要素の取得
const restaurantGrid = document.getElementById("restaurant-grid");
const countNum = document.getElementById("count-num");
const detailModal = document.getElementById("detail-modal");
const closeModalBtn = document.getElementById("close-modal");
const modalContent = document.getElementById("modal-content");
const themeToggle = document.getElementById("theme-toggle");

// 初期化処理
document.addEventListener("DOMContentLoaded", () => {
  // restaurants.json を読み込んでから描画する
  fetch("restaurants.json")
    .then(res => res.json())
    .then(data => {
      restaurants = data;
      renderCards();
      setupFilters();
    })
    .catch(err => {
      console.error("データの読み込みに失敗しました:", err);
      restaurantGrid.innerHTML = "<p style='color:var(--text-secondary);text-align:center;grid-column:1/-1;'>データを読み込めませんでした。</p>";
    });

  setupTheme();

  // モーダル外クリックで閉じる処理
  detailModal.addEventListener("click", (e) => {

    if (e.target === detailModal) {
      closeModal();
    }
  });
  
  closeModalBtn.addEventListener("click", closeModal);
});

// 店舗カードのレンダリング
function renderCards() {
  // フィルタリング
  const filtered = restaurants.filter(item => {
    const areaMatch = currentAreaFilter === "all" || item.area === currentAreaFilter || 
                     (currentAreaFilter === "草津・南草津" && (item.area === "草津" || item.area === "南草津" || item.area === "草津・南草津"));
    const genreMatch = currentGenreFilter === "all" || item.genre === currentGenreFilter;
    return areaMatch && genreMatch;
  });

  // 件数の更新
  countNum.textContent = filtered.length;

  // グリッドをクリア
  restaurantGrid.innerHTML = "";

  if (filtered.length === 0) {
    restaurantGrid.innerHTML = `
      <div class="no-results">
        <i class="fa-regular fa-face-frown"></i>
        <p>該当する店舗が見つかりませんでした。別のフィルターをお試しください。</p>
      </div>
    `;
    return;
  }

  // カードの生成
  filtered.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "restaurant-card";
    card.id = `card-${item.id}`;
    card.style.animationDelay = `${index * 0.05}s`;
    
    card.innerHTML = `
      <div class="card-img-wrapper">
        <img class="card-img" src="${item.image}" alt="${item.name}の料理イメージ" loading="lazy">
        <div class="card-tags">
          <span class="tag tag-area">${item.area}</span>
          <span class="tag tag-genre">${item.genre}</span>
        </div>
      </div>
      <div class="card-info">
        <h3 class="card-name">${item.name}</h3>
        <p class="card-desc">${truncateText(item.description, 75)}</p>
        <div class="card-footer">
          <span class="card-budget"><i class="fa-solid fa-yen-sign"></i> ${item.budget}</span>
          <button class="more-btn" onclick="openDetail(${item.id})">
            詳細を見る <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    `;
    restaurantGrid.appendChild(card);
  });
}

// フィルターの設定
function setupFilters() {
  const areaButtons = document.querySelectorAll("#area-filters .filter-btn");
  const genreButtons = document.querySelectorAll("#genre-filters .filter-btn");

  areaButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      areaButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentAreaFilter = btn.getAttribute("data-filter");
      animateAndRender();
    });
  });

  genreButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      genreButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentGenreFilter = btn.getAttribute("data-filter");
      animateAndRender();
    });
  });
}

// フィルタリング時のフェードアウト・インアニメーション
function animateAndRender() {
  restaurantGrid.classList.add("fade-out");
  setTimeout(() => {
    renderCards();
    restaurantGrid.classList.remove("fade-out");
    restaurantGrid.classList.add("fade-in");
    setTimeout(() => {
      restaurantGrid.classList.remove("fade-in");
    }, 300);
  }, 250);
}

// テキスト省略用ヘルパー
function truncateText(str, n) {
  return (str.length > n) ? str.substr(0, n - 1) + '...' : str;
}

// モーダルを開く
window.openDetail = function(id) {
  const item = restaurants.find(r => r.id === id);
  if (!item) return;

  const featuresHTML = item.features.map(f => `<li><i class="fa-solid fa-check"></i> ${f}</li>`).join("");

  modalContent.innerHTML = `
    <div class="detail-header-img" style="background-image: url('${item.image}')">
      <div class="detail-img-overlay"></div>
      <div class="detail-title-block">
        <div class="detail-badge-row">
          <span class="detail-badge">${item.area}</span>
          <span class="detail-badge genre-badge">${item.genre}</span>
        </div>
        <h2 class="detail-name">${item.name}</h2>
      </div>
    </div>
    
    <div class="detail-info-grid">
      <div class="detail-main-info">
        <h3 class="section-subtitle">店舗紹介</h3>
        <p class="detail-description">${item.description}</p>
        
        <h3 class="section-subtitle">お店のこだわり・特徴</h3>
        <ul class="detail-features-list">
          ${featuresHTML}
        </ul>
      </div>

      <div class="detail-side-info">
        <h3 class="section-subtitle">アクセス＆情報</h3>
        <table class="info-table">
          <tr>
            <th><i class="fa-solid fa-location-dot"></i> 住所</th>
            <td>${item.address}</td>
          </tr>
          <tr>
            <th><i class="fa-solid fa-train"></i> アクセス</th>
            <td>${item.access}</td>
          </tr>
          <tr>
            <th><i class="fa-solid fa-phone"></i> 電話番号</th>
            <td>${item.tel}</td>
          </tr>
          <tr>
            <th><i class="fa-solid fa-yen-sign"></i> 目安予算</th>
            <td>${item.budget}</td>
          </tr>
        </table>
        
        <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="external-link-btn">
          お店の詳細・予約サイトへ <i class="fa-solid fa-up-right-from-square"></i>
        </a>
      </div>
    </div>
  `;

  detailModal.showModal();
  document.body.classList.add("modal-open");
};

// モーダルを閉じる
function closeModal() {
  detailModal.classList.add("modal-closing");
  // アニメーション完了後に実際に閉じる
  setTimeout(() => {
    detailModal.close();
    detailModal.classList.remove("modal-closing");
    document.body.classList.remove("modal-open");
  }, 300);
}

// テーマのセットアップ＆切り替え
function setupTheme() {
  const savedTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeIcon(newTheme);
  });
}

function updateThemeIcon(theme) {
  const icon = themeToggle.querySelector("i");
  if (theme === "dark") {
    icon.className = "fa-solid fa-sun";
  } else {
    icon.className = "fa-solid fa-moon";
  }
}
