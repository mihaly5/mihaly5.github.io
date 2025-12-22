/**
 * Global Language Configuration
 * Supports: English (en), Hungarian (hu), German (de), Spanish (es)
 */

const translations = {
    en: {
        // Navigation
        nav_home: "Home",
        nav_invest: "Investment",
        nav_loan: "Loan Calc",
        nav_bs: "Pro: Black-Scholes",
        nav_privacy: "Privacy",

        // Common
        btn_calc: "Calculate",
        footer_rights: "All Rights Reserved.",
        
        // --- HOME PAGE ---
        home_title: "Financial Modeling Portal",
        home_sub: "Professional, server-less financial calculators.",

        // --- LOAN CALC ---
        loan_title: "Loan Repayment Calculator",
        loan_sub: "Calculate your monthly payments precisely.",
        lbl_loan_amount: "Loan Amount:",
        lbl_interest_rate: "Annual Interest Rate (%):",
        lbl_years: "Term (Years):",
        // Loan Results
        res_monthly_payment: "Monthly Payment:",
        res_total_payment: "Total Repayment:",
        res_total_interest: "Total Interest:",

        // --- COMPOUND INTEREST ---
        invest_title: "Compound Interest Calculator",
        invest_sub: "Visualize your wealth growth.",
        lbl_start_capital: "Starting Capital:",
        lbl_monthly_add: "Monthly Contribution:",
        // Invest Results & Chart
        res_final_balance: "Future Balance:",
        res_total_invested: "Total Invested:",
        res_profit: "Total Profit:",
        chart_invested: "Principal",
        chart_profit: "Interest/Profit",

        // --- BLACK-SCHOLES ---
        bs_title: "Black-Scholes Model",
        bs_sub: "European Option Pricing & The Greeks",
        lbl_stock: "Stock Price ($):",
        lbl_strike: "Strike Price ($):",
        lbl_time: "Time to Maturity (Years):",
        lbl_vol: "Volatility (σ %):",
        lbl_r: "Risk-free Rate (%):",
        // BS Results
        res_call: "CALL Price",
        res_put: "PUT Price",
        res_greeks: "The Greeks",
        res_delta: "Delta",
        res_gamma: "Gamma",
        res_theta: "Theta (Daily)",
        res_vega: "Vega (1%)",
        warn_short_maturity: "Note: Very short maturity detected. Model accuracy may degrade.",
        
        // --- PRIVACY ---
        priv_title: "Privacy Policy"
    },
    hu: {
        nav_home: "Főoldal",
        nav_invest: "Befektetés",
        nav_loan: "Hitelkalkulátor",
        nav_bs: "Pro: Black-Scholes",
        nav_privacy: "Adatvédelem",
        btn_calc: "Számítás",
        footer_rights: "Minden jog fenntartva.",

        home_title: "Pénzügyi Modellező Portál",
        home_sub: "Professzionális, szervermentes pénzügyi kalkulátorok.",

        loan_title: "Hitel Törlesztő Kalkulátor",
        loan_sub: "Mennyit kell fizetned havonta? Számold ki pontosan.",
        lbl_loan_amount: "Hitelösszeg (Ft):",
        lbl_interest_rate: "Kamatláb (%):",
        lbl_years: "Futamidő (Év):",
        res_monthly_payment: "Havi Törlesztő:",
        res_total_payment: "Teljes Visszafizetés:",
        res_total_interest: "Teljes Kamat:",

        invest_title: "Kamatos Kamat Kalkulátor",
        invest_sub: "Így lesz a kicsiből nagy vagyon.",
        lbl_start_capital: "Kezdő tőke (Ft):",
        lbl_monthly_add: "Havi befizetés (Ft):",
        res_final_balance: "Jövőbeli Egyenleg:",
        res_total_invested: "Befizetett Tőke:",
        res_profit: "Hozam / Kamat:",
        chart_invested: "Tőke",
        chart_profit: "Hozam",

        bs_title: "Black-Scholes Modell",
        bs_sub: "Európai Opcióárazás & Görögök",
        lbl_stock: "Részvény ár ($):",
        lbl_strike: "Kötési ár ($):",
        lbl_time: "Lejáratig idő (Év):",
        lbl_vol: "Volatilitás (σ %):",
        lbl_r: "Kockázatmentes kamat (%):",
        res_call: "CALL Ár",
        res_put: "PUT Ár",
        res_greeks: "Görögök (Greeks)",
        res_delta: "Delta",
        res_gamma: "Gamma",
        res_theta: "Theta (Napi)",
        res_vega: "Vega (1%)",
        warn_short_maturity: "Figyelem: Nagyon rövid futamidő. A modell pontossága csökkenhet.",

        priv_title: "Adatvédelmi Nyilatkozat"
    },
    de: {
        nav_home: "Startseite",
        nav_invest: "Zinseszins",
        nav_loan: "Kreditrechner",
        nav_bs: "Pro: Black-Scholes",
        nav_privacy: "Datenschutz",
        btn_calc: "Berechnen",
        footer_rights: "Alle Rechte vorbehalten.",

        home_title: "Finanzmodellierungs-Portal",
        home_sub: "Professionelle, serverlose Finanzrechner.",

        loan_title: "Kreditrechner",
        loan_sub: "Berechnen Sie Ihre monatlichen Raten.",
        lbl_loan_amount: "Kreditbetrag:",
        lbl_interest_rate: "Zinssatz (%):",
        lbl_years: "Laufzeit (Jahre):",
        res_monthly_payment: "Monatliche Rate:",
        res_total_payment: "Gesamtzahlung:",
        res_total_interest: "Gesamtzinsen:",

        invest_title: "Zinseszinsrechner",
        invest_sub: "Sehen Sie, wie Ihr Vermögen wächst.",
        lbl_start_capital: "Startkapital:",
        lbl_monthly_add: "Monatlicher Beitrag:",
        res_final_balance: "Endkapital:",
        res_total_invested: "Investiertes Kapital:",
        res_profit: "Gewinn / Zinsen:",
        chart_invested: "Kapital",
        chart_profit: "Zinsen",

        bs_title: "Black-Scholes-Modell",
        bs_sub: "Europäische Optionspreisgestaltung & Griechen",
        lbl_stock: "Aktienkurs ($):",
        lbl_strike: "Basispreis ($):",
        lbl_time: "Laufzeit (Jahre):",
        lbl_vol: "Volatilität (σ %):",
        lbl_r: "Risikofreier Zinssatz (%):",
        res_call: "CALL Preis",
        res_put: "PUT Preis",
        res_greeks: "Die Griechen",
        res_delta: "Delta",
        res_gamma: "Gamma",
        res_theta: "Theta (Täglich)",
        res_vega: "Vega (1%)",
        warn_short_maturity: "Hinweis: Sehr kurze Laufzeit. Die Genauigkeit kann abnehmen.",

        priv_title: "Datenschutzerklärung"
    },
    es: {
        nav_home: "Inicio",
        nav_invest: "Inversión",
        nav_loan: "Préstamos",
        nav_bs: "Pro: Black-Scholes",
        nav_privacy: "Privacidad",
        btn_calc: "Calcular",
        footer_rights: "Todos los derechos reservados.",

        home_title: "Portal de Modelos Financieros",
        home_sub: "Calculadoras financieras profesionales sin servidor.",

        loan_title: "Calculadora de Préstamos",
        loan_sub: "Calcula tus pagos mensuales con precisión.",
        lbl_loan_amount: "Monto del préstamo:",
        lbl_interest_rate: "Tasa de interés (%):",
        lbl_years: "Plazo (Años):",
        res_monthly_payment: "Pago Mensual:",
        res_total_payment: "Pago Total:",
        res_total_interest: "Interés Total:",

        invest_title: "Calculadora de Interés Compuesto",
        invest_sub: "Visualiza el crecimiento de tu patrimonio.",
        lbl_start_capital: "Capital inicial:",
        lbl_monthly_add: "Contribución mensual:",
        res_final_balance: "Saldo Final:",
        res_total_invested: "Capital Invertido:",
        res_profit: "Ganancia / Interés:",
        chart_invested: "Capital",
        chart_profit: "Interés",

        bs_title: "Modelo Black-Scholes",
        bs_sub: "Valoración de Opciones Europeas y Griegas",
        lbl_stock: "Precio Acción ($):",
        lbl_strike: "Precio Ejercicio ($):",
        lbl_time: "Tiempo al vencimiento (Años):",
        lbl_vol: "Volatilidad (σ %):",
        lbl_r: "Tasa libre de riesgo (%):",
        res_call: "Precio CALL",
        res_put: "Precio PUT",
        res_greeks: "Las Griegas",
        res_delta: "Delta",
        res_gamma: "Gamma",
        res_theta: "Theta (Diario)",
        res_vega: "Vega (1%)",
        warn_short_maturity: "Nota: Vencimiento muy corto. La precisión del modelo puede disminuir.",

        priv_title: "Política de Privacidad"
    }
};

/**
 * Change Language Function
 * Updates text, toggles SEO content blocks, and handles dropdown sync.
 */
function changeLanguage(lang) {
    localStorage.setItem('selectedLang', lang);

    // 1. Text Replacements
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang] && translations[lang][key]) {
            element.innerText = translations[lang][key];
        }
    });

    // 2. SEO Content Blocks Toggle
    document.querySelectorAll('.lang-content').forEach(el => el.style.display = 'none');
    const activeContent = document.getElementById(`content-${lang}`);
    if (activeContent) activeContent.style.display = 'block';

    // 3. Sync Dropdown
    const selector = document.getElementById('lang-selector');
    if (selector) selector.value = lang;

    // 4. Trigger Re-calculations (if functions exist) to update result labels
    if (typeof calculateBS === 'function' && document.getElementById('bs-result').style.display === 'block') calculateBS();
    if (typeof calculateLoan === 'function' && document.getElementById('loan-result').style.display === 'block') calculateLoan();
    if (typeof calculateInterest === 'function' && document.getElementById('result').style.display === 'block') calculateInterest();
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLang') || 'en'; // Default to English if new
    changeLanguage(savedLang);
    const selector = document.getElementById('lang-selector');
    if (selector) {
        selector.addEventListener('change', (e) => changeLanguage(e.target.value));
    }
});