import"./phone-BZ4PH8wU.js";var e=[{id:`summary`,title:`一句話`,html:`<p class="big">鏡頭畫面<b>只在你自己的裝置上</b>辨識，不會上傳到任何伺服器，也沒有人在看。</p>
      <p>只有你自己按「📱 手機當鏡頭」時，畫面會從你的手機直接傳到你的電腦（加密），中間不經過別人。</p>`},{id:`camera`,title:`鏡頭`,html:`<ul>
      <li>辨識臉、手、身體的是 Google 的開源程式 MediaPipe，<b>在你的電腦或手機上跑</b>，辨識完只留下「角度和表情的數字」拿去動角色，畫面本身不存、不傳。</li>
      <li>瀏覽器第一次會問能不能用相機。用著的時候，瀏覽器分頁上會有相機圖示，筆電或手機上也會亮綠燈。</li>
      <li>按「停止捕捉」或關掉頁面，相機就關了。</li>
      <li>不想讓這個網站用相機了：到瀏覽器的「網站設定」把相機改成「封鎖」就好。</li>
    </ul>`},{id:`desktop`,title:`電腦版（控制台）`,html:`<ul>
      <li>控制台跑在你自己的電腦上（那個黑色視窗），網址是 <code>127.0.0.1</code>：<b>只有這台電腦自己連得到</b>，同一個 Wi‑Fi 的其他人連不進來。</li>
      <li>匯入角色、拍照、存收藏這些「會寫檔案」的功能，只接受控制台自己送來的要求；你在同一個瀏覽器開別的網站，那些網站也動不到你的檔案。</li>
      <li>照片存在專案資料夾裡的 <code>photos</code>，不會傳出去。</li>
      <li>第一次安裝要連網路下載執行程式（Node.js 官方網站）和套件；之後除了「手機當鏡頭」「跟手機互傳」和「多人連線」，其他功能都不需要網路。</li>
    </ul>`},{id:`phone`,title:`手機版（網站）`,html:`<ul>
      <li>手機版網站放在 GitHub Pages：打開網址只是把程式和角色檔<b>下載到手機</b>，辨識一樣在手機上跑。</li>
      <li>你匯入的角色、動作、背景圖（包括從電腦傳過來的）<b>只存在這支手機的瀏覽器裡</b>，不會上傳，別人看不到。清除瀏覽器的網站資料就會刪掉。</li>
      <li>拍照、錄影只有在你按「儲存」時才存到手機的相簿或檔案。</li>
      <li>網站沒有廣告、沒有追蹤、不用登入、不用 Cookie。GitHub 跟所有網站一樣會記錄連線紀錄（例如 IP 位址）。</li>
    </ul>`},{id:`p2p`,title:`手機當鏡頭、跟手機互傳、多人連線`,html:`<ul>
      <li>畫面用 WebRTC 在手機和電腦之間<b>直接傳</b>，而且一定是加密的（瀏覽器規定，關不掉）。</li>
      <li>兩邊要先「牽線」才找得到對方：用的是 PeerJS 的免費伺服器。它會知道兩邊的網路位址（IP）和代碼，<b>看不到畫面</b>。</li>
      <li>少數網路（公司、學校）沒辦法直接連時，會經過 PeerJS 的轉送伺服器；畫面一樣是加密的，轉送的人也看不到內容。</li>
      <li>📲 跟手機互傳：角色、動作、背景、照片、影片一樣在兩台裝置之間<b>直接傳、加密</b>，不經過別的伺服器。只有你在電腦上勾選的檔案才會傳；電腦只收照片和影片，存到專案的 photos 資料夾。</li>
      <li>多人連線傳的是「表情、角度的數字」和角色檔，<b>不傳鏡頭畫面</b>。</li>
      <li>只有知道代碼（或掃到 QR code）的人才連得上。手機連上之後，控制台會自動把代碼藏起來，而且連著的時候別人搶不走。</li>
      <li>電腦不會把畫面傳給手機；手機也只會連到你輸入的那個代碼，不會被別人連進來看。</li>
    </ul>
    <p class="tip">💡 直播或分享螢幕時，別讓代碼和 QR code 出現在畫面上。用完按「取消」，代碼就失效了。</p>`},{id:`oss`,title:`用到的開源程式`,html:`<p>three.js、three-vrm（畫角色）、MediaPipe（辨識）、PeerJS（連線）、Vite（電腦版的本機伺服器）。都是公開原始碼、很多人在用的程式（MIT／Apache 授權）。</p>`},{id:`credits`,title:`素材出處`,html:`<ul>
      <li>內建角色：VRoid プロジェクト（pixiv）範例角色、Polygonal Mind／ToxSam 的 100Avatars 系列、Xmas Chibis 系列（CC0 或可以自由使用）。</li>
      <li>Seed-san：© VirtualCast, Inc.（VRM Public License 1.0）。</li>
      <li>動作「坐著、女僕待機、被抓起來」：Motions from Desktop Homunculus by notelm, CC BY 4.0。</li>
      <li>背景全景圖：Poly Haven（CC0）。</li>
    </ul>`}];function t(t){return(t===`phone`?[`summary`,`camera`,`phone`,`p2p`,`desktop`,`oss`,`credits`]:[`summary`,`camera`,`desktop`,`p2p`,`phone`,`oss`,`credits`]).map(t=>e.find(e=>e.id===t)).map(e=>`<section class="pv-sec"><h3>${e.title}</h3>${e.html}</section>`).join(``)}var n=`
.pv-sec { margin: 0 0 18px; }
.pv-sec h3 { font-size: 16px; margin: 0 0 6px; }
.pv-sec p, .pv-sec li { font-size: 14px; line-height: 1.7; color: var(--sub); }
.pv-sec b { color: var(--text); }
.pv-sec .big { font-size: 16px; color: var(--text); }
.pv-sec ul { margin: 0; padding-left: 20px; }
.pv-sec li { margin: 4px 0; }
.pv-sec code { font-size: 13px; padding: 0 4px; border-radius: 4px; background: rgba(127, 127, 127, .18); }
.pv-sec .tip { background: rgba(240, 180, 90, .12); border-radius: 10px; padding: 8px 12px; color: var(--text); }
`,r=document.createElement(`style`);r.textContent=n,document.head.appendChild(r),document.getElementById(`body`).innerHTML=t(`phone`),document.getElementById(`back`).addEventListener(`click`,e=>{document.referrer&&new URL(document.referrer).origin===location.origin&&history.length>1&&(e.preventDefault(),history.back())});