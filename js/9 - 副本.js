// 页面内容数据配置
const pageContent = {
    images: {
        profileAvatar: "img/2.jpg",
        courseContent: "img/3.jpg"
    },
    
    texts: {
        mainTitle: "1対1のコンサルティング",
        titleSuffix: "を受けませんか？",
        description1: "投資の基礎知識を学びたいですか？私たちは無料の株式市場知識共有コースを提供し、市場の仕組みと基本的な投資概念を理解できるようサポートします。",
        description2: "本日、60名限定で募集を開始いたします。ご興味のある方はぜひご参加ください。",
        ctaButton1: "今すぐ私のラインを追加",
        ctaButton2: "今すぐ私のラインを追加",
        ctaButton3: "今すぐ参加する",
        ctaButton4: "今すぐ参加",
        ctaFloating: "今すぐ私のラインを追加",
        courseTitle: "私が主催するコースでは以下を共有いたします：",
        noticeTitle: "重要なお知らせ：",
        noticeText1: "参加後、私の1対1コンサルティングサービスも受けられます",
        noticeText2: "これは完全無料の公益コースで、いつでも退出可能です。体系的な学習を通じて、専門的な市場知識の枠組みを習得できます。",
        riskTitle: "重要なリスク開示",
        privacyPolicy: "プライバシーポリシー",
        termsOfService: "利用規約"
    },
    
    curriculumItems: [
        "📈 株式市場の基本概念解説",
        "🏢 上場企業のファンダメンタル分析手法",
        "⚡ 市場変動とリスク管理要点"
    ],
    
    riskItems: [
        "本サービスは一般的な市場情報のみを提供し、投資アドバイスや推奨を構成するものではありません。本ウェブサイトは日本の金融株式に関心のある投資家に学習と交流のプラットフォームを提供することを目的としています。",
        "金融市場にはリスクが存在し、投資元本の一部または全部を失う可能性があります。グループメンバーが共有する市場観点、投資経験、関連情報は参考と議論のためのみです。",
        "表示されている例はすべて過去のデータ分析であり、将来の収益を保証するものではありません。投資収益は大きく変動する可能性があり、過去の実績は将来の収益を保証しません。",
        "投資家は自身のリスク許容度に基づいて慎重に決定すべきです。純粋に共有性質のものであり、いかなる形式の財務管理や投資アドバイスも構成しません。過去の実績は将来の結果を示すものではありません。",
        "すべての情報は客観的事実の陳述であり、投資アドバイスを構成するものではありません。"
    ]
};

// 页面渲染函数
function renderPage() {
    const container = document.getElementById('main-container');
    
    const htmlContent = `
        <div class="financial_platform_container_wrapper">
            <div class="primary_hero_section_layout">
                <div class="expert_profile_information_block">
                    <img src="img/2.jpg" alt="専1ール" class="circular_profile_avatar_image">
                    <button class="interactive_cta_button_element" onclick="tyy()">${pageContent.texts.ctaButton1}</button>
                </div>
                
                <div class="main_content_information_panel">
                    <h1 class="primary_headline_title_text">
                        <span class="highlight_accent_color_span">${pageContent.texts.mainTitle}</span>${pageContent.texts.titleSuffix}
                    </h1>
                    <p class="descriptive_content_paragraph">
                        ${pageContent.texts.description1}
                    </p>
                    <p class="descriptive_content_paragraph">
                        ${pageContent.texts.description2.replace('60名限定', '<span class="highlight_limited_spots">60名限定</span>')}
                    </p>
                    <button class="interactive_cta_button_element" onclick="tyy()">${pageContent.texts.ctaButton2}</button>
                </div>
            </div>

            <div class="curriculum_details_section">
                <h2 class="section_heading_title">${pageContent.texts.courseTitle}</h2>
                <div class="course_image_container">
                    <img src="img/3.jpg" alt="1" class="course_content_image">
                </div>
                <ul class="curriculum_item_list">
                    ${pageContent.curriculumItems.map(item => `<li class="curriculum_list_item_element">${item}</li>`).join('')}
                </ul>
                <button class="interactive_cta_button_element" onclick="tyy()">${pageContent.texts.ctaButton3}</button>
            </div>

            <div class="important_notice_section">
                <h3 class="section_heading_title">${pageContent.texts.noticeTitle}</h3>
                <p class="notice_content_text">
                    ${pageContent.texts.noticeText1}
                </p>
                <p class="notice_content_text">
                    ${pageContent.texts.noticeText2}
                </p>
                <button class="interactive_cta_button_element" onclick="tyy()">${pageContent.texts.ctaButton4}</button>
            </div>

            <div class="risk_disclosure_section">
                <h3 class="risk_warning_heading">
                    <span class="warning_emoji_icon">⚠️</span>${pageContent.texts.riskTitle}
                </h3>
                ${pageContent.riskItems.map(item => `<p class="risk_item_paragraph">• ${item}</p>`).join('')}
            </div>

            <div class="footer_legal_links_section">
                <a href="privacy.html" class="legal_link_element">${pageContent.texts.privacyPolicy}</a>
                <a href="terms.html" class="legal_link_element">${pageContent.texts.termsOfService}</a>
            </div>

            <button class="floating_bottom_cta_button" onclick="tyy()">
                ${pageContent.texts.ctaFloating}
            </button>
        </div>
    `;
    
    container.innerHTML = htmlContent;
}

// 页面加载完成后自动渲染
document.addEventListener('DOMContentLoaded', function() {
    renderPage();
});