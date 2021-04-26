export class AssetsService {
    public mainLogo: String;
    public bellIcon: String;
    public searchIcon: String;
    public dashboardIcon: String;
    public batchReportIcon: String;
    public statisticalAnalysisIcon: String;
    public temperatureIcon: String;
    public batchIdIcon: String;
    public producedIcon: String;
    public humidityIcon: String;
    public amountToProduceIcon: String;
    public acceptableProductsIcon: String;
    public vibrationIcon: String;
    public productsPerMinuteIcon: String;
    public defectProductsIcon: String;
    public navigationMenuIcon: String;

    constructor() { 
        this.changeAssets("light");
    }

    public changeAssets(theme: String): void {
        switch (theme) {
            case "light":
                this.mainLogo = "assets/ajatek_logo_1.png";
                this.bellIcon = "assets/icons/bell-icon.png";
                this.searchIcon = "assets/icons/search-icon.png";
                this.dashboardIcon = "assets/icons/dashboard-icon.png";
                this.batchReportIcon = "assets/icons/batch-report-icon.png";
                this.statisticalAnalysisIcon = "assets/icons/statistical-analysis-icon.png";
                this.temperatureIcon = "assets/icons/temperature-icon.png";
                this.batchIdIcon = "assets/icons/batch-id-icon.png";
                this.producedIcon = "assets/icons/produced-icon.png";
                this.humidityIcon = "assets/icons/humidity-icon.png";
                this.amountToProduceIcon = "assets/icons/amount-to-produce-icon.png";
                this.acceptableProductsIcon = "assets/icons/acceptable-products-icon.png";
                this.vibrationIcon = "assets/icons/vibration-icon.png";
                this.productsPerMinuteIcon = "assets/icons/products-per-minute-icon.png";
                this.defectProductsIcon = "assets/icons/defect-products-icon.png";
                this.navigationMenuIcon = "assets/icons/navigation-menu-icon.png";
                break;
            case "dark":
                this.mainLogo = "assets/ajatek_logo_2.png";
                this.bellIcon = "assets/icons/white-mode/bell-icon.png";
                this.searchIcon = "assets/icons/white-mode/search-icon.png";
                this.dashboardIcon = "assets/icons/white-mode/dashboard-icon.png";
                this.batchReportIcon = "assets/icons/white-mode/batch-report-icon.png";
                this.statisticalAnalysisIcon = "assets/icons/white-mode/statistical-analysis-icon.png";
                this.temperatureIcon = "assets/icons/white-mode/temperature-icon.png";
                this.batchIdIcon = "assets/icons/white-mode/batch-id-icon.png";
                this.producedIcon = "assets/icons/white-mode/produced-icon.png";
                this.humidityIcon = "assets/icons/white-mode/humidity-icon.png";
                this.amountToProduceIcon = "assets/icons/white-mode/amount-to-produce-icon.png";
                this.acceptableProductsIcon = "assets/icons/white-mode/acceptable-products-icon.png";
                this.vibrationIcon = "assets/icons/white-mode/vibration-icon.png";
                this.productsPerMinuteIcon = "assets/icons/white-mode/products-per-minute-icon.png";
                this.defectProductsIcon = "assets/icons/white-mode/defect-products-icon.png";
                this.navigationMenuIcon = "assets/icons/white-mode/navigation-menu-icon.png";
                break;
        }
    }
}