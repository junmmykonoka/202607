// 滋賀・琵琶湖エリア お気に入り飲食店データ
const restaurants = [
  {
    id: 1,
    name: "風土Bar 三日月",
    area: "近江八幡",
    genre: "居酒屋・バル",
    budget: "￥3,000～￥3,999",
    description: "近江八幡エリアで人気の創作居酒屋。掘りごたつのカウンターや畳の座敷があり、落ち着いた空間でゆったりと過ごせます。地元の新鮮な食材を活かした創作料理やB級グルメ、豊富なドリンクメニューが自慢です。",
    address: "滋賀県近江八幡市鷹飼町無番地（近江八幡駅すぐ）",
    tel: "0748-33-3139 (※詳細はお問い合わせください)",
    access: "JR琵琶湖線 近江八幡駅 徒歩2分",
    image: "images/mikazuki.jpg",
    url: "https://foodbarmikazuki.gorp.jp/",
    features: ["掘りごたつカウンター", "畳のお座敷", "地元食材の創作料理", "豊富なアルコールメニュー"]
  },
  {
    id: 2,
    name: "炭火焼鳥 とりのこころ 近江八幡店",
    area: "近江八幡",
    genre: "焼鳥・肉料理",
    budget: "￥3,000～￥3,999",
    description: "備長炭で豪快かつ繊細に焼き上げる「近江黒鶏」や「大山産がいなどり」などの銘柄鶏が主役。香ばしい炭の香りとジューシーな肉の旨みが口いっぱいに広がります。アットホームな「町の焼鳥屋さん」をコンセプトにした落ち着くお店です。",
    address: "滋賀県近江八幡市中村町21-12",
    tel: "0748-36-3939",
    access: "JR琵琶湖線 近江八幡駅 徒歩8分",
    image: "images/torinokokoro.jpg",
    url: "https://sumibiyakitori-torinokokoro.gorp.jp/",
    features: ["備長炭使用", "近江黒鶏・大山がいなどり", "店主厳選の焼き加減", "アットホームなカウンター席"]
  },
  {
    id: 3,
    name: "すしと酒 －箔－ 草津本店",
    area: "草津・南草津",
    genre: "和食・寿司",
    budget: "￥4,000～￥4,999",
    description: "草津駅近くに佇む寿司居酒屋。毎朝仕入れる鮮度抜群のネタを使った握り寿司をはじめ、創作天ぷらや全国から厳選した日本酒をリーズナブルに楽しめます。個室も完備しており、デートや会食にも最適です。",
    address: "滋賀県草津市大路1丁目12-1 星空館 1F",
    tel: "077-599-1033",
    access: "JR琵琶湖線 草津駅 東口 徒歩3分",
    image: "images/haku.jpg",
    url: "https://kejc100.gorp.jp/",
    features: ["本格握り寿司", "創作天ぷら", "銘酒・日本酒多数", "落ち着いた個室空間"]
  },
  {
    id: 4,
    name: "和のほとり 忠兵衛",
    area: "守山",
    genre: "和食・寿司",
    budget: "￥5,000～￥5,999",
    description: "守山にある大人の隠れ家和食処。店主自ら目利きした滋賀県では珍しい希少な鮮魚のお造り盛り合わせが名物。地元の厳選日本酒や本格焼酎とのペアリングが絶品です。掘りごたつの完全個室で上質な時間を提供します。",
    address: "滋賀県守山市守山1丁目6-12",
    tel: "077-514-1188",
    access: "JR琵琶湖線 守山駅 西口 徒歩7分",
    image: "images/chubee.jpg",
    url: "https://chu-be.gorp.jp/",
    features: ["希少な鮮魚お造り", "完全個室完備", "こだわり抜いた地酒", "上品な数寄屋風店内"]
  },
  {
    id: 5,
    name: "鰻と酒 成瀬 野洲店",
    area: "野洲",
    genre: "鰻",
    budget: "￥3,000～￥4,999",
    description: "伝統的な絶品の鰻重をお値打ち価格で提供する人気店。ふっくらと蒸し上げて香ばしく焼き上げたうな重はもちろん、鰻肝のアヒージョや鰻おつまみピッツァなど、お酒が美味しく進む創作鰻メニューも豊富に揃うモダンな鰻バルです。",
    address: "滋賀県野洲市小篠原1000 (※詳細はお問い合わせください)",
    tel: "077-584-5980",
    access: "JR琵琶湖線 野洲駅 南口 徒歩4分",
    image: "images/naruse.jpg",
    url: "https://kepx800.gorp.jp/",
    features: ["ふっくらうな重", "鰻創作おつまみ", "気軽にワインや日本酒と", "カフェのようなモダン内装"]
  },
  {
    id: 6,
    name: "創作むらさき",
    area: "野洲",
    genre: "和食・寿司",
    budget: "昼: ￥2,000～ / 夜: ￥6,000～￥7,999",
    description: "野洲駅近くの本格割烹・創作料理店。琵琶湖や全国の活魚、極上の近江牛を使った繊細な逸品料理を堪能できます。お昼は豪華な「A5等級近江牛御膳」や「海鮮御膳」が人気。お祝い事や接待にふさわしい気品あるお店です。",
    address: "滋賀県野洲市北野1丁目1-20",
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
  }
];

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
  renderCards();
  setupFilters();
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
