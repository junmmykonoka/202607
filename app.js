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
