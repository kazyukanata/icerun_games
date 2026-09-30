// タイル定義
// 0: 氷, 1: 壁, 2: スタート, 3: ゴール
// 4: スイッチ, 5: 可動壁(ON), 6: 可動壁(OFF), 7: ひび割れ氷, 8: 古代紋章氷

let stages = [
  // --- 1〜5: 7x7 基本 ---
  {
    size: 7,
    map: [
      [1,1,1,1,1,1,1],
      [1,2,0,0,0,3,1],
      [1,0,1,0,1,0,1],
      [1,0,0,0,0,0,1],
      [1,0,1,0,1,0,1],
      [1,0,0,0,0,0,1],
      [1,1,1,1,1,1,1]
    ]
  },
  {
    size: 7,
    map: [
      [1,1,1,1,1,1,1],
      [1,2,0,0,1,3,1],
      [1,0,1,0,1,0,1],
      [1,0,0,0,0,0,1],
      [1,0,1,0,1,0,1],
      [1,0,0,0,0,0,1],
      [1,1,1,1,1,1,1]
    ]
  },

  // --- 6〜10: 9x9 応用 ---
  {
    size: 9,
    map: [
      [1,1,1,1,1,1,1,1,1],
      [1,2,0,0,0,0,0,3,1],
      [1,0,1,1,0,1,1,0,1],
      [1,0,0,0,0,0,0,0,1],
      [1,0,1,0,7,0,1,0,1], // 7: ひび割れ氷
      [1,0,0,0,0,0,0,0,1],
      [1,0,1,1,0,1,1,0,1],
      [1,0,0,0,0,0,0,0,1],
      [1,1,1,1,1,1,1,1,1]
    ]
  },

  // --- 11〜15: 11x11 スイッチ導入 ---
  {
    size: 11,
    map: [
      [1,1,1,1,1,1,1,1,1,1,1],
      [1,2,0,0,0,0,0,0,0,3,1],
      [1,0,1,1,0,1,1,0,1,0,1],
      [1,0,0,0,0,0,0,0,0,0,1],
      [1,0,1,0,1,4,1,0,1,0,1], // 4: スイッチ
      [1,0,0,0,0,5,0,0,0,0,1], // 5/6: 可動壁
      [1,0,1,0,1,6,1,0,1,0,1],
      [1,0,0,0,0,0,0,0,0,0,1],
      [1,0,1,1,0,1,1,0,1,0,1],
      [1,0,0,0,0,0,0,0,0,0,1],
      [1,1,1,1,1,1,1,1,1,1,1]
    ]
  },

  // --- 16〜20: 13x13 ---
  {
    size: 13,
    map: [
      [1,1,1,1,1,1,1,1,1,1,1,1,1],
      [1,2,0,0,0,0,0,0,0,0,0,3,1],
      [1,0,1,1,0,1,1,0,1,1,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,1,0,1,4,1,0,1,4,1,0,1],
      [1,0,0,0,0,5,0,0,0,5,0,0,1],
      [1,0,1,0,1,6,1,0,1,6,1,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,1,1,0,1,1,0,1,1,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,1,1,0,1,1,0,1,1,0,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,1,1,1,1,1,1,1,1,1,1,1,1]
    ]
  },

  // --- 21〜25: 15x15 ---
  {
    size: 15,
    map: [
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [1,2,0,0,0,0,0,0,0,0,0,0,0,3,1],
      [1,0,1,1,0,1,1,0,1,1,0,1,1,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,1,0,1,4,1,0,1,4,1,0,1,0,1],
      [1,0,0,0,0,5,0,0,0,5,0,0,0,0,1],
      [1,0,1,0,1,6,1,0,1,6,1,0,1,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,1,1,0,1,1,0,1,1,0,1,1,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,1,0,1,4,1,0,1,4,1,0,1,0,1],
      [1,0,0,0,0,5,0,0,0,5,0,0,0,0,1],
      [1,0,1,0,1,6,1,0,1,6,1,0,1,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ]
  },

  // --- 26〜30: 17x17 ---
  {
    size: 17,
    map: [
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
      [1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,3,1],
      [1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,1,0,1,4,1,0,1,4,1,0,1,4,1,0,1],
      [1,0,0,0,0,5,0,0,0,5,0,0,0,5,0,0,1],
      [1,0,1,0,1,6,1,0,1,6,1,0,1,6,1,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,1,0,1,4,1,0,1,4,1,0,1,4,1,0,1],
      [1,0,0,0,0,5,0,0,0,5,0,0,0,5,0,0,1],
      [1,0,1,0,1,6,1,0,1,6,1,0,1,6,1,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1],
      [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
      [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ]
  }
];

let currentStage = 0;
let map = stages[currentStage].map;
let player = findStart(map);

function findStart(map) {
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[0].length; x++) {
      if (map[y][x] === 2) return { x, y };
    }
  }
  return { x: 1, y: 1 };
}

function loadStage(n) {
  if (n < 0) n = 0;
  if (n >= stages.length) {
    alert("全ステージクリア！");
    n = stages.length - 1;
  }
  currentStage = n;
  map = stages[currentStage].map;

  const size = stages[currentStage].size;
  const game = document.getElementById("game");
  game.style.gridTemplateColumns = `repeat(${size}, 64px)`;
  game.style.gridTemplateRows = `repeat(${size}, 64px)`;

  document.getElementById("stageInfo").textContent =
    `ステージ ${currentStage + 1} / ${stages.length}`;

  player = findStart(map);
  draw();
}

function draw() {
  const game = document.getElementById("game");
  game.innerHTML = "";

  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[0].length; x++) {
      let div = document.createElement("div");
      div.classList.add("tile");

      if (player.x === x && player.y === y) {
        div.classList.add("player");
      } else {
        const t = map[y][x];
        if (t === 0) div.classList.add("ice");
        if (t === 1) div.classList.add("wall");
        if (t === 2) div.classList.add("start");
        if (t === 3) div.classList.add("goal");
        if (t === 4) div.classList.add("switch");
        if (t === 5) div.classList.add("wallOn");
        if (t === 6) div.classList.add("wallOff");
        if (t === 7) div.classList.add("iceCracked");
        if (t === 8) div.classList.add("iceRune");
      }

      game.appendChild(div);
    }
  }
}

function move(dir) {
  let dx = 0, dy = 0;
  if (dir === "up") dy = -1;
  if (dir === "down") dy = 1;
  if (dir === "left") dx = -1;
  if (dir === "right") dx = 1;

  const game = document.getElementById("game");
  const tiles = game.children;
  const index = player.y * map[0].length + player.x;
  const playerEl = tiles[index];
  playerEl.classList.remove("slideUp","slideDown","slideLeft","slideRight");

  if (dir === "up")    playerEl.classList.add("slideUp");
  if (dir === "down")  playerEl.classList.add("slideDown");
  if (dir === "left")  playerEl.classList.add("slideLeft");
  if (dir === "right") playerEl.classList.add("slideRight");

  while (true) {
    let nx = player.x + dx;
    let ny = player.y + dy;

    if (ny < 0 || ny >= map.length || nx < 0 || nx >= map[0].length) break;

    let tile = map[ny][nx];

    // 壁・ON壁で停止
    if (tile === 1 || tile === 5) break;

    // ひび割れ氷なら落ちる演出（スタートに戻す）
    if (tile === 7) {
      player.x = nx;
      player.y = ny;
      alert("氷が割れた！スタートに戻る…");
      player = findStart(map);
      draw();
      return;
    }

    // スイッチを踏んだら可動壁を切り替え
    if (tile === 4) {
      toggleWalls();
    }

    player.x = nx;
    player.y = ny;

    if (tile === 3) {
      alert("クリア！");
      loadStage(currentStage + 1);
      return;
    }
  }

  draw();
}

function toggleWalls() {
  for (let y = 0; y < map.length; y++) {
    for (let x = 0; x < map[0].length; x++) {
      if (map[y][x] === 5) map[y][x] = 6;
      else if (map[y][x] === 6) map[y][x] = 5;
    }
  }
}

function resetStage() {
  player = findStart(map);
  draw();
}

loadStage(0);
