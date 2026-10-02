# Portfolio — bàn giao review và sửa cho Gemini

Ngày: 2026-10-02. Website đã review: https://lenamkhanh.netlify.app/.
Workspace thực tế: `D:\Code\Code\portfolio-web`.

## 1. Mục tiêu và cách dùng tài liệu

Hãy sửa portfolio theo các vấn đề và tiêu chí bên dưới. Mục tiêu là giúp người xem nhanh chóng hiểu Khánh là ai, đã xây dựng gì, có đóng góp gì và bằng chứng nằm ở đâu; đồng thời làm trải nghiệm mobile và keyboard tốt hơn. Giữ hướng **Proof-of-Work Lab Console / light technical-editorial / Chromatic Proof Ledger**. Không cần thay toàn bộ giao diện.

Tài liệu này là kết quả review giao diện và luồng tương tác, không phải một mock mới. Nhận xét thẩm mỹ là đánh giá thiết kế; các số đo là quan sát tại viewport cụ thể, không phải giá trị layout bắt buộc.

**Đọc trước khi sửa:**

1. Đọc `AGENTS.md`, `package.json`, `src/content.ts` và các component thực tế.
2. Kiểm tra `git status`, giữ nguyên thay đổi của người khác. Làm trực tiếp, không tạo subagent.
3. Chạy baseline, tự chạy local server và mở preview. So sánh checkout với production trước khi áp dụng nhận xét.
4. Sửa từng nhóm có mục tiêu rõ, ưu tiên mobile project interaction và accessibility trước, rồi typography/density, cuối cùng performance/metadata.
5. Kiểm tra lại app thật sau khi sửa, không chỉ dựa vào build hay ảnh chụp một viewport.

**Lưu ý phiên bản:** production và checkout đã có khác biệt. Production được review dùng các nhãn như `Work` / `Selected Work`; checkout khi viết tài liệu dùng `Projects` / `Featured projects`, CTA `View featured projects`, và một số copy mới. Không khôi phục copy cũ chỉ để khớp báo cáo. Git sạch tại thời điểm đối chiếu; phải kiểm tra lại khi bắt đầu.

Phạm vi bàn giao: sửa source và kiểm chứng local. Không tự deploy production, không thay dependency/framework chỉ để làm lại UI, không thêm dữ liệu cá nhân hoặc thành tích chưa có nguồn. Không tạo ảnh sản phẩm giả.

## 2. Kết luận thiết kế

App có cá tính và nền tảng tốt: typography tên lớn, nền sáng kỹ thuật, ảnh thi đấu thật, thành tích có cấu trúc, phần AI Challenge có bằng chứng và liên kết cụ thể, project selector thống nhất, contact dễ tìm.

Điểm yếu chính là **project xuất hiện quá muộn, một số card có quá nhiều lớp trang trí/thông tin lặp, và mobile phải cuộn quá xa để thấy chi tiết project vừa chọn**. Các vùng giải thưởng hiện chưa cùng một hệ thị giác: dark/neon C2, certificate-like cards, rounded spotlight và technical dossier cạnh tranh với nhau. Cần thống nhất hierarchy, không làm tất cả card giống hệt nhau.

Giữ cảm giác tự tin, có bằng chứng. Không sửa bằng cách tự hạ đóng góp của Khánh; chỉ làm rõ phạm vi hoặc bỏ các mệnh đề phụ chưa chứng minh được.

## 3. Phạm vi kiểm chứng đã có và chưa có

Đã xem toàn bộ trang desktop, mobile 390 × 844 và tablet 820 × 900; thử navigation chính, chọn cả bốn project, chuyển gallery sang On-Stage. Không thấy console error/warning trong lần kiểm tra. Sáu ảnh đang render đều tải được và có alt; DOM có một H1.

Quan sát tại desktop khoảng 1280 px: trang dài khoảng 8.922 px; phần work bắt đầu khoảng y=6.230, sau trajectory, pre-university và university record. Mobile 390 px dài khoảng 13.124 px. Đây là chỉ dấu về density/IA, không phải yêu cầu đạt một chiều cao trang cố định.

Chưa hoàn tất Lighthouse, network throttling, đo LCP/CLS, kiểm tra live reduced-motion/Save-Data hay screen reader. Không được ghi đã đạt các mục này. CV mở qua công cụ kiểm tra bị hạn chế và viewer trong browser chưa hiển thị được: **chưa xác minh rendering PDF, chưa đủ bằng chứng kết luận link CV hỏng**.

Một số card mobile có `scrollWidth > clientWidth` do watermark SVG bị cắt trong card `overflow: hidden`. Chưa thấy đây là tràn chữ hay tràn ngang toàn document. Không sửa nhầm bằng cách clip toàn trang.

## 4. Những quyết định bắt buộc giữ

- Giao diện sáng, nền constellation/blueprint nhẹ. Không quay lại dark sci-fi dashboard.
- Section 02 hoàn toàn không có ảnh; ba stage trên timeline: provincial progression, Regional First Prize C2, hai national distinctions. Giữ index `01`, `02`, `03—04` bên trái marker và có khoảng cách rõ.
- Section 03 là `University competition record`, năm 2026; hệ sidebar/index đồng bộ Section 02. HCMUS Coding Challenge là thành tích đại học riêng biệt.
- Provincial record: Grade 10 Third Prize, Grade 11 Third Prize, Grade 12 Second Prize. Giữ anatomy các card đã được duyệt, chỉ chỉnh readability/spacing nếu cần.
- National Young Informatics: First Prize ở Central Region, Table C2, 2024; Honourable Mention tại national finals. Không biến regional First Prize thành national championship.
- April 30 Olympiad: Bronze Medal in Informatics, lần thứ 28, 2024.
- GDGoC AI Challenge 2026: Top 20 Outstanding Team; team “Khô gà xé xợi”; Reinforcement Learning là approach. Giữ cover chính thức và certificate link. Không biến thành xếp hạng cá nhân/championship.
- Ảnh thi đấu thật, tự nhiên: crop và hiệu chỉnh nhẹ được; không generative enhancement, sửa mặt/cơ thể hoặc thay ảnh bằng ảnh AI. Giữ original.
- Interests là hướng đang tìm hiểu, không khẳng định specialization đã chốt. Cũng không dùng lời lẽ phủ nhận thành tựu có thật.
- Motion phục vụ đọc: reveal một lần, timeline rail, wrapper photo entrance, project transition. Không scroll hijacking, pointer parallax, morph/zoom hay scene transitions mới.
- Mobile, reduced-motion và Save-Data: constellation render một frame deterministic rồi dừng RAF. Chỉ desktop thường mới animate.
- Giữ email, GitHub, repository, source/certificate links và legacy redirects, trừ khi chứng minh link sai và có replacement đúng.

## 5. Thứ tự ưu tiên

| Mức | Công việc | Kết quả cần đạt |
| --- | --- | --- |
| P1 | Mobile project selector | Chi tiết xuất hiện sát project được chọn, không buộc cuộn qua ba project khác |
| P1 | Keyboard/focus/skip link | Điều hướng và chọn project/gallery được bằng keyboard, focus rõ |
| P1 | Hierarchy Coding Challenge + distinctions | Event/award/evidence rõ ở mobile, hết header chữ nhỏ bị ép và thông tin lặp |
| P1 | Kiểm tra claim phụ | Không có badge hoặc số liệu làm người xem hiểu sai phạm vi |
| P2 | Project discovery và density | Dự án dễ phát hiện từ đầu trang, giảm độ dài không cần thiết |
| P2 | Đồng bộ visual system | C2, distinctions và các university card cùng ngôn ngữ editorial |
| P2 | Hero/trajectory/interests/contact copy | Ngắn, cụ thể, tự tin; mỗi vùng thêm một lớp thông tin khác nhau |
| P2 | Images/metadata/CV verification | Ảnh có kích thước, lazy đúng; metadata chia sẻ đủ; CV được kiểm chứng |
| P3 | Authentic project previews | Dùng screenshot thật nếu có; diagram vẫn là fallback hợp lệ |

Không có bằng chứng hiện tại về app crash/blocker để gán P0. Hoàn thành P1 trước khi polishing các chi tiết P3.

## 6. Yêu cầu sửa theo từng phần

### 6.1 Header và navigation

**Đang tốt:** sticky header gọn, navigation hoạt động, CV dễ tìm. Checkout đang dùng nhãn Projects.

**Cần sửa:** tăng hit area của nav, đặc biệt mobile. Trong review live, Work khoảng 29 × 42, Trajectory 59 × 42, Contact 47 × 42 px. Hướng tới vùng bấm ít nhất khoảng 44 × 44 cho thiết kế touch; không gọi riêng số đo này là kết luận vi phạm WCAG. Dùng padding/min-size, không chỉ tăng font.

Thêm skip link hiển thị khi focus, trỏ tới vùng nội dung chính. Đặt target hợp lý trong DOM; background/header không được trở thành điểm đến thay cho nội dung. Focus-visible cần thấy trên cả nền sáng và contact tối. Anchor offset phải tránh bị sticky header che heading. Tránh nhét thêm nhiều mục vào header mobile.

**Acceptance:** nav không chồng tên/CV ở 390 px và 320 px; keyboard truy cập mọi link; skip link đưa tới nội dung; active state không chỉ dựa vào màu nếu khó nhận ra.

### 6.2 Hero

**Giữ:** tên lớn, bố cục sáng, constellation, ba headline evidence, CTA tới projects và GitHub.

**Sửa:** rút phần intro/thesis còn role hiện tại + loại hệ thống đã xây + một đóng góp cụ thể. Tránh dồn nhiều thuật ngữ trong cùng một câu. Tách summary ở hero khỏi chi tiết engine/benchmark ở project. CTA project rõ hơn là hợp lý; giữ wording mới nếu đã tốt.

Không thêm job title, GPA, kinh nghiệm doanh nghiệp, số người dùng hay research impact chưa có nguồn. Không biến toàn bộ hero thành danh sách huy chương. Nền được phép nổi hơn tại hero nhưng phải yên phía sau chữ.

**Acceptance:** trong một màn hình đầu mobile, hiểu tên/định vị và thấy hành động chính; H1 duy nhất; text không bị motion che/ẩn nếu reduced-motion.

### 6.3 Learning trajectory

**Giữ:** rail và thứ tự Algorithms → Competitive Programming → AI Foundations → Current Interests.

**Sửa:** nén khoảng cách và copy chung chung; mỗi mốc một ý ngắn về quá trình học thực tế. Không lặp toàn bộ bốn topic từ Section 05. Không tự tạo một progression nghề nghiệp hoặc specialization chưa có.

**Acceptance:** timeline vẫn đọc tuần tự ở mobile, không có card cao cố định gây khoảng trống; rail/label không đè nhau. Nếu dữ liệu title phải thay đổi, phải có lý do rõ và cập nhật test tương ứng, không xóa test để cho qua.

### 6.4 Provincial progression

**Giữ:** ba grade/result card và chính xác các award đã duyệt. Đây không phải khu vực cần redesign lớn.

**Sửa nhẹ:** label mono đủ lớn, line-height tốt, thứ tự grade → award rõ; title inset đồng bộ với hai stage sau. Giảm khoảng trống nếu section đang quá cao, không ép card mất khoảng thở.

**Acceptance:** không thay result/grade, không thêm ảnh; timeline indices vẫn nằm trái marker, không dính sát mép card.

### 6.5 Regional First Prize / C2

**Vấn đề:** dark card, lime/neon badge, dark-blue nested dossier và watermark tạo cảm giác sci-fi hơn các phần editorial. Award mạnh nhưng có nhiều hộp trong hộp.

**Sửa:** giữ một dark typographic feature theo quyết định cũ; dùng charcoal + warm amber/champagne tiết chế. C2 là một field/nhãn hỗ trợ, không cần một dashboard con. Một headline First Prize, một dòng event/region/year, một contextual line và source CTA là đủ. Đảm bảo padding headline không sát mép.

Kiểm tra nguồn cho `Regional Seed #1`, “top regional representative”/advancement và organizer list. Đây là claim phụ cần bằng chứng, không tự suy ra từ First Prize. Nếu không xác minh được, bỏ claim phụ và giữ award đúng. Không sửa `First Prize` thành lời né tránh.

**Acceptance:** First Prize là điểm nhìn đầu; nhận ra rõ regional + C2 + 2024; source link còn hoạt động; contrast tốt; không neon excess/nested panels không cần thiết.

### 6.6 Hai national distinctions

**Đang tốt:** bản live hiện đã có card đủ rộng, mobile stack; không còn kết luận cũ về text overlap.

**Vấn đề:** meta nhỏ, bị ép cột và wrap gần từng từ; logo/watermark, badge, event tiếng Anh/Việt, authority footer và chips cùng tranh hierarchy. Tổng thể giống chứng nhận tự thiết kế nhưng dùng tín hiệu “verified/authorized” dễ bị hiểu là chứng nhận ban tổ chức.

**Sửa:** mỗi card ưu tiên award → event → year/scope → evidence. Header meta dùng một dòng hoặc wrap tự nhiên, không khóa cột quá hẹp. Giữ một accent nhẹ phân biệt Honourable Mention và Bronze. Giảm watermark/logo/badge trùng ý; icon tự vẽ không được trình bày như seal chính thức. Nếu giữ tiếng Việt, để nó là caption thứ cấp gọn, không hai title cùng trọng lượng.

Rà soát `Authorized by`, `Verified Stage`, `Southern Elite Invitational`, `50+ Specialized High Schools` và địa điểm/organizer. Có nguồn thì mô tả đúng vai trò; không có thì bỏ phần embellishment. Event/award cốt lõi vẫn giữ.

**Acceptance:** ở 390 px, header không wrap từng từ; award/event nhìn rõ ngay; không làm người xem tưởng đây là ảnh certificate chính thức; không thêm ảnh vào Section 02. Watermark overflow bị clip nội bộ không phải lý do dùng overflow hidden toàn page.

### 6.7 HCMUS Coding Challenge 2026

**Đang tốt:** card chung gắn copy và ảnh, ảnh thật, dominant event title, result nổi bật.

**Vấn đề:** title desktop bị ép thành nhiều dòng; Champion được nhắc ở pill, award block và metric; intro dài, có câu như “zero-overhead, edge-case-proof implementations under strict real-time constraints”. Mobile phải đi qua heading/result/intro/bốn metrics mới tới ảnh.

**Sửa:** giữ HCMUS Coding Challenge 2026 là title chính và Champion ngay bên dưới; giảm badge/metric lặp kết quả. Điều chỉnh grid để title không quá hẹp. Mobile đưa ảnh chính tới sớm, sau event/result và một intro ngắn; supporting photos phía sau. Không đổi thứ tự bằng CSS khiến keyboard/screen reader đọc khác xa visual flow.

Rút copy thành nội dung thực tế về giải thuật/lập trình thi đấu. `ICPC` là format claim cần xác minh từ nguồn cuộc thi; không có thì dùng wording về algorithmic problem solving phù hợp, không khẳng định format. Giữ Champion đã có bằng chứng.

**Acceptance:** mobile nhìn được event + Champion + ảnh chính trước một khối metrics dài; title không có dòng lẻ khó đọc; các ảnh không crop mất nhân vật/chứng cứ quan trọng; không lặp ba lần cùng kết quả.

### 6.8 AI Challenge / Reply404 / GEMTRA

**Giữ:** đây là vùng evidence mạnh nhất: role, hệ thống, scale/technical evidence, repo và ảnh liên quan. Giữ đóng góp Team Lead/Core Architect nếu nguồn hiện tại hỗ trợ, không tự hạ nó thành “just explored”.

**Sửa hierarchy:** một dòng đóng góp chính; result và role hỗ trợ; paper và technical highlights không cần nhiều panel/badge cùng cỡ. Summary cho người mới xem; thuật ngữ engine là lớp đọc tiếp.

**Metric:** `sub-7ms`/`6.6ms` phải nói rõ là latency của GEMTRA DP alignment theo điều kiện đo có nguồn, không phải toàn pipeline retrieval. Nếu chưa có nguồn đo xác định, không tự invent hardware/dataset/p95. Có thể giữ highlight khi ghi đúng scope và dẫn tới evidence; nếu chưa xác minh thì ghi lại limitation trong handoff kết quả.

**Paper:** kiểm tra trạng thái thật của SOICT 2026 từ artifact hiện có; phân biệt manuscript/submitted/accepted/published khi cần. Không tự kết luận unpublished/rejected; không invent DOI/publication link. Giữ first-author credit đúng nguồn.

**Gallery:** click hiện hoạt động nhưng Arrow keys chưa thấy xử lý. Nếu dùng role tablist, triển khai tab keyboard pattern, aria-controls và panel labeling tương ứng; nếu chỉ là image switcher buttons thì dùng semantics button và trạng thái phù hợp. Certificate dùng contain/fit để đọc chứng nhận, photo dùng crop hợp lý. Khi đổi ảnh, không nhảy chiều cao gây mất vị trí đọc.

**Acceptance:** người xem phân biệt result, role và engine latency; repo/certificate/photo switcher hoạt động bằng touch và keyboard; một ảnh active, tên trạng thái rõ; ảnh caption đúng ảnh.

### 6.9 K-Tech / HrClaw

**Giữ:** event, team, finalist result, product focus, repo và recap liên kết với nhau.

**Sửa:** group photo lớn hiện minh họa sự kiện hơn là sản phẩm/công việc cá nhân. Nếu repo/assets có screenshot sản phẩm thật, dùng làm preview chính hoặc bổ sung; group photo vẫn là evidence thứ cấp. Nếu chưa có screenshot, giữ ảnh thật và dùng description/diagram hiện có, không tạo UI giả.

Làm rõ đóng góp cá nhân chỉ khi có nguồn; không tự gán architect/lead. Rút caption dài, giao diện chính bằng tiếng Anh; tên người/team/event có thể giữ nguyên ngôn ngữ chính thức.

**Acceptance:** trong card đọc được sản phẩm giải quyết gì, result gì, đâu là bằng chứng; không làm ảnh group thành bằng chứng cho vai trò cá nhân chưa xác minh.

### 6.10 GDGoC

**Giữ gần như nguyên:** cover chính thức, bốn fact: event, Top 20, team + RL approach, certificate link. Đây là vùng có visual hierarchy và contrast tốt.

**Sửa nhẹ:** bỏ verified badge trùng ý nếu chỉ trang trí; kiểm tra text/CTA trên cover ở mobile; giảm chiều cao nếu khoảng trống dư. Không thêm một hệ panel mới lên cover.

**Acceptance:** đúng Top 20 Outstanding Team, đúng team, RL chỉ là approach; certificate folder link còn đúng; cover không bị sửa bằng AI.

### 6.11 Featured projects — ưu tiên cao nhất

**Giữ:** bốn project, selected state, links và sơ đồ preview cùng hệ; desktop layout tabs + detail có thể tiếp tục dùng.

**Lỗi UX mobile:** bốn nút/card project lớn xếp dọc rồi mới tới một detail panel chung. Trong review, chọn Reply404 ở đầu list nhưng detail bắt đầu khoảng **948 px dưới đáy card đó**. Người dùng khó nhận ra đã cập nhật gì.

**Giải pháp mặc định:** mobile dùng accordion hoặc inline selected detail ngay sau item tương ứng; desktop giữ tab layout. Chọn một architecture rõ ràng, không render hai panel có cùng ID hoặc hai bản focusable cùng lúc. Có thể chia component detail dùng chung và bảo đảm chỉ layout đang active tham gia accessibility tree. Không chữa bằng tự động cuộn mạnh mỗi lần click.

Nếu dùng tabs: roving tabindex, ArrowLeft/Right theo orientation thực tế, Home/End, aria-selected, aria-controls, tabpanel aria-labelledby. Nếu mobile accordion: button trong heading, aria-expanded, aria-controls, region phù hợp; Enter/Space hoạt động tự nhiên. Responsive switch không làm mất active project hoặc focus. AnimatePresence phải không khiến aria-controls trỏ tới panel không tồn tại kéo dài.

Rà `aria-live`: chỉ thông báo thay đổi cần thiết, tránh đọc lại toàn bộ nội dung dài mỗi lần chọn. Link trong inactive panel không được tabbable.

CTA icon hiện dùng GitHub cho mọi link, kể cả live demo TripFlow: dùng icon theo loại link và label mô tả đúng đích. Screenshot thật là ưu tiên khi có asset; schematic hiện có vẫn dùng được nhưng không giả dạng product screenshot.

**Acceptance:** 390 px chọn bất kỳ item nào thấy detail ở sát item trong flow; không đi qua ba card khác; keyboard đầy đủ; chỉ một active state/panel; external links đúng; transition reduced-motion không trì hoãn nội dung.

### 6.12 Current interests

**Giữ:** bốn hướng broad, typography và exploration framing. Checkout đã đổi intro; đọc nó trước, không copy lại bản live một cách máy móc.

**Sửa:** mỗi topic thêm một câu ngắn về câu hỏi đang tìm hiểu, nếu chủ sở hữu có dữ liệu hỗ trợ. Có thể bổ sung descriptions riêng trong content source mà giữ array/title contract. Không suy ra đã có expertise hoặc một research agenda chính thức chỉ từ tên topic. Nếu thiếu dữ liệu, rút intro và spacing trước thay vì tự tạo dự án/nghiên cứu.

**Acceptance:** topic có thêm ý nghĩa hoặc section gọn hơn; không lặp trajectory; không claim specialization đã chốt, không dùng giọng tự hạ thấp.

### 6.13 Contact

**Giữ:** dark ending, email, CV, GitHub. Checkout có lời mời internships & AI research lab opportunities; bảo toàn intent này nếu còn đúng dữ liệu.

**Sửa:** headline cụ thể hơn, giảm khoảng trống lớn trên mobile giữa copy và actions. Email/CV phải dễ chạm và wrap an toàn. Không thêm availability/location/phone chưa được cấp.

CV: kiểm tra URL trong content, HTTP status, content type, PDF signature và mở bằng browser/PDF viewer phù hợp. Chỉ gọi broken khi có bằng chứng cụ thể; nếu viewer môi trường hạn chế thì báo giới hạn kiểm chứng.

**Acceptance:** contact CTA nhìn thấy sớm khi vào section, tải đúng file, email đúng, dark focus/contrast tốt.

## 7. IA và hệ thị giác toàn trang

### 7.1 Đưa project tới sớm, giữ hệ index đã duyệt

Work hiện nằm sau hai phần achievement dài. Đây là đề xuất thiết kế quan trọng, không phải bug routing.

**Phương án an toàn mặc định:** giữ Section 02/03/04 như AGENTS, đặt một featured-project teaser gọn ngay sau hero hoặc bên trong hero, liên kết tới project detail hiện có. Chỉ highlight một đến hai artifact, không nhân đôi toàn bộ project section/metrics. Nav Projects vẫn tới `#work`.

**Phương án thay thế:** hero → featured work → compact trajectory → pre-university → university → interests → contact. Chỉ thực hiện nếu thống nhất được numbering/story mới với quyết định chủ sở hữu; không vừa đổi thứ tự vừa để số section mâu thuẫn. Không cần dừng để hỏi những chi tiết padding thường lệ.

Giảm chiều dài bằng cắt repetition, giảm fixed/min-height không cần thiết và bớt nested panels; không nén bằng font nhỏ. Hero = summary; competition = outcome + evidence; project = implementation + contribution.

### 7.2 Typography, color, spacing

- Giữ font hệ hiện tại Space Grotesk / IBM Plex Mono; mono cho label kỹ thuật, không mọi đoạn văn.
- Giữ light paper + cobalt làm nền hệ thống; warm amber cho award, official cover giữ màu gốc. Dark First Prize và dark contact là điểm nhấn có chủ đích.
- Chuẩn hóa vài cấp border/radius/padding bằng token hiện có hoặc token nhỏ; không thêm một CSS override chain riêng cho mỗi card.
- Một primary result/title mỗi component; metadata nhỏ hơn nhưng vẫn đọc được. Hạn chế uppercase tracking rộng ở cột hẹp.
- Body khoảng 15–17 px trở lên là điểm khởi đầu để thử, label khoảng 11–12 px với line-height hợp lý; đây là hướng kiểm tra visual, không phải ép mọi breakpoint cùng thông số.
- Đảm bảo title không dính mép, grid có min-width hợp lý, dùng wrapping tự nhiên. Không dùng fixed height cho card chứa text thay đổi.
- Đo contrast trên nền render thực tế; không chỉ so hex khi có overlay/canvas. Giảm constellation contrast phía sau body nếu nhiễu, chỉ opacity fade; không thay geometry theo scroll.

## 8. Accessibility, images, metadata

**Accessibility:** giữ heading hierarchy hợp lý và một H1; ảnh thật alt mô tả đúng chứng cứ, decorative SVG/canvas aria-hidden; không thêm duplicate facts trong sr-only gây đọc lặp. Check focus order, focus visibility, keyboard tabs/gallery, skip link, target size, zoom và reduced-motion.

**Images:** tại review sáu ảnh đang render có alt và tải được, nhưng chưa thấy lazy loading; chỉ một ảnh có cả width/height. Thêm kích thước intrinsic đúng file và CSS responsive/aspect-ratio để giữ chỗ. Lazy ảnh below-fold, không lazy ảnh LCP thật. Với gallery chỉ cần preload hợp lý theo nhu cầu; tránh tải tất cả ảnh nặng ban đầu. Không thay ảnh gốc bằng asset AI. Đo request/CLS thật trước và sau khi có điều kiện, không tuyên bố nhanh hơn chỉ vì build pass.

**SEO/sharing:** `index.html` đã có title/description/og:title/og:description/og:type; chưa thấy canonical, og:url, og:image. Bổ sung URL production chuẩn và ảnh share bằng asset được phép, URL tuyệt đối công khai. Metadata phải cùng claim/status với content; Twitter metadata tùy nhu cầu. Không dùng certificate riêng tư làm social image.

**Routing:** giữ `/paper`, `/observatory`, `/index` redirect về `/`; test anchor deep link và refresh production/local đúng setup. Không tạo thêm theme cũ.

## 9. Bản đồ file cho người sửa

Các đường dẫn dưới đây tương đối với `D:\Code\Code\portfolio-web`; xác minh component hiện tại trước khi edit.

| File | Trách nhiệm cần xem |
| --- | --- |
| `AGENTS.md` | Quyết định thiết kế; các quyết định mới hơn supersede quyết định cũ |
| `src/content.ts` | Profile, awards, evidence, project links, interests, contact; nguồn nội dung chung |
| `src/components/PortfolioPage.tsx` | Header, hero, section order, interests; skip link/featured teaser |
| `src/components/TrajectoryRail.tsx` | Learning trajectory |
| `src/components/PreUniversityRecord.tsx` | Provincial/C2/distinctions, hardcoded claim phụ và SVG |
| `src/components/CompetitionEvidence.tsx` | Coding Challenge, AI/gallery, HrClaw, GDGoC |
| `src/components/ProjectEvidence.tsx` | Active project, tab semantics, responsive detail, CTA icon |
| `src/components/ArtifactPreview.tsx` | Preview schematic; authentic screenshot fallback nếu có |
| `src/components/ContactPanel.tsx` | Contact copy/actions/spacing |
| `src/components/EvidenceLedger.tsx` | Ba hero highlights |
| `src/styles.css` | Grid, typography, card systems, responsive rules, focus/skip link |
| `src/components/LivingConstellationField.tsx`, `src/constellation.ts` | Canvas runtime và deterministic/static budgets |
| `src/components/ResearchAtlasBackground.tsx`, `src/motion.ts` | Background layers/reveal, không thêm geometry state machine |
| `src/App.tsx` | MotionConfig reducedMotion và legacy route redirects |
| `index.html` | SEO/share metadata |
| `public/assets/` | Asset thật, optimized photos, CV; không ghi đè original vô cớ |

Nếu sửa copy, đưa dữ liệu thích hợp về `content.ts`; không tạo hai nguồn truth trái nhau giữa metadata, card hardcoded và content. Không cần broad refactor để đổi vài dòng chữ.

## 10. Contract/tests cần bảo toàn

Chạy baseline tại checkout hiện tại, không dựa vào test count của một lượt cũ. Các test hiện có bảo vệ:

- `src/content.test.ts`: profile, ba headline evidence, trajectory/interests, sáu award, AI/GDGoC/HrClaw data và links, bốn projects; không có fabricated career fields.
- `src/components/PreUniversityRecord.test.tsx`: archive photo-free, label/year, đúng ba timeline nodes và ba stage; không thêm bridge photo.
- `src/components/CompetitionEvidence.test.tsx`: Section 03 dùng label University competition record, 2026.
- `src/layoutStyles.test.ts`: sticky header; `.portfolio-shell` không được overflow clip/hidden/auto/scroll; background layer selector còn đúng. **Không sửa tràn bằng clip shell vì sẽ phá sticky contract.**
- `src/motion.test.ts`: background layers và reveal budget.
- `src/constellation.test.ts`: seed deterministic, mobile/reduced-motion/Save-Data static; desktop 72–90 nodes, 40–45 FPS budget; tối đa ba precomputed neighbours/node.

Test exact string có thể cần chỉnh nếu copy chủ đích được cải thiện, nhưng vẫn giữ invariant về facts/layout. Không xóa test hoặc đổi assertion thành “có render” để che regression. Thêm test có ý nghĩa cho project keyboard/selection và gallery nếu thay interaction; không cần test từng pixel/câu copy mới.

## 11. Quy trình kiểm tra trước khi bàn giao

Tại workspace thực tế, đọc scripts rồi chạy các lệnh đang có:

```powershell
git status --short
npm test
npm run build
npm run lint
npm run dev -- --host 127.0.0.1
```

Nếu đang có server phù hợp do người khác sở hữu, dùng lại thay vì dừng nó. Nếu lỗi baseline có trước thay đổi, ghi riêng bằng output cụ thể, không nhận lỗi đó là regression hoặc che bằng tắt rule. Lint/build/tests không thay thế kiểm tra visual.

**Ma trận browser tối thiểu:**

| View | Cần xem |
| --- | --- |
| 390 × 844 | Toàn trang; project detail proximity, certificate header, Coding photo order, contact gap |
| 820 × 900 | Grid chuyển breakpoint, title wrapping, header/cards |
| Desktop 1280 hoặc 1440 | Hierarchy tổng thể, C2/light consistency, sticky header, full project flow |
| 320 px hoặc zoom 200% | Header/CTA/wrapping; không mất nội dung hay document overflow |
| Reduced motion | Nội dung thấy ngay, reveal không che reading, constellation static |
| Save-Data/mobile runtime | Một deterministic canvas frame; không RAF liên tục |
| Keyboard | Skip link, nav, mọi project/gallery, links và focus order |

**Luồng bắt buộc:**

- Click nav và thử URL hash trực tiếp; heading không nằm dưới header.
- Chọn cả bốn projects desktop/mobile; đúng detail/link/active state, không duplicate ID.
- Keyboard chọn project/gallery theo semantics đã chọn; inactive detail không giữ focusable links.
- Gallery đổi đủ ảnh, certificate đọc được, caption đúng, chiều cao ổn định.
- Mở repo, source, certificate, email/CV; ghi hạn chế nếu môi trường không đọc được PDF.
- Check ảnh tải đủ, console, scrollbar ngang của document; không gán watermark clip nội bộ là overflow toàn page.
- Thử legacy routes; đọc toàn trang để phát hiện copy/metrics/status mâu thuẫn.
- Nếu đo performance/contrast: ghi công cụ, viewport/conditions và số đo thật. Nếu chưa đo: nói chưa đo.

## 12. Definition of done và output Gemini cần trả

Hoàn thành khi P1 đã giải quyết; các phần được duyệt vẫn đúng; local preview hoạt động; test/build/check phù hợp pass hoặc lỗi baseline được phân biệt; mobile/tablet/desktop đều được xem trực tiếp.

Gemini cần trả:

1. Danh sách file đã sửa và tác dụng của từng nhóm thay đổi.
2. P1/P2/P3 nào hoàn thành, mục nào còn thiếu asset hoặc provenance; không ghi hoàn tất nếu chỉ đề xuất.
3. Lệnh đã chạy và kết quả thật, kể cả baseline failures nếu có.
4. Screenshot trước/sau các vùng quan trọng: mobile projects, distinctions, Coding Challenge, hero/desktop overview.
5. Claim nào đã xác minh, claim phụ nào bỏ hoặc chỉnh scope, paper/CV còn giới hạn gì.
6. Nêu rõ chưa deploy production nếu chỉ sửa local. Không tự thêm broad redesign vào patch.

**Prompt ngắn để bắt đầu:**

> Đọc tài liệu này và AGENTS.md rồi sửa trực tiếp portfolio trong D:\Code\Code\portfolio-web. Làm solo, giữ các facts và thiết kế đã chốt. Ưu tiên mobile project detail proximity, keyboard accessibility, hierarchy award cards và Coding Challenge. Đối chiếu checkout với live vì wording đã khác; chạy server và kiểm tra browser thật. Tiếp tục các mục P2 trong phạm vi tài liệu, dùng featured teaser làm mặc định an toàn để cải thiện project discovery mà giữ hệ section index. Không fabricate claims/assets, không tự deploy. Khi xong báo file changes, verification, before/after và limitations cụ thể.
