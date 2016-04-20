var Manifest = new _Manifest();
function _Manifest() {
    var self = this;

    this.isPhone = false;
    this.maxWidth = 888;

    this.versionCode = 300;
    this.versionName = "3.0.0";

    this.lastVersionCode = localStorage["versionCode"];
    localStorage["versionCode"] = this.versionCode;

    this.language = localStorage["language"];
    if (this.language == undefined) {
        this.language = getLocale();
    }

    this.isVersionUpgrade = function() {
        if (this.lastVersionCode == undefined) {
            return true;
        }
        return this.versionCode > this.lastVersionCode;
    };

    this.setIsPhone = function(isPhone) {
        this.isPhone = isPhone;
        if (isPhone) {
            R.dimen.padding = 10;
            R.dimen.half_padding = 5;
            R.dimen.supTitle = 35;
            R.dimen.paragraph_padding_top = 24;
            R.dimen.content_padding_bottom = 24;
        } else {
            R.dimen.padding = 20;
            R.dimen.half_padding = 8;
            R.dimen.supTitle = 44;
            R.dimen.paragraph_padding_top = 72;
            R.dimen.content_padding_bottom = 72;
        }
    };
}

function getLocale() {
    var DEFAULT_VALUE = 'zh'; /* 默认设置为中文 */
    return navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || DEFAULT_VALUE;
}

var R = new _R();
function _R() {

    this.string = new _string();
    this.color = new _color();
    this.dimen = new _dimen();

    function _string() {
        if (Manifest.language.indexOf("zh") >= 0) {
        		this.ok = "确定";
        		this.cancel = "取消";
        	
            this.intro = "首页推荐";
            this.getstart = "开始";
            this.vs_android = "交流社区";
            this.doc = "书签导航";
            this.app = "应用推荐";
            this.about = "关于我们";
            this.setting = "设置";
            this.language = "语言";

            this.intro_content = "AndroidCat安卓书签网，是专门为Android开发者而收集整理的网站资源导航。";
            this.material_design = "谷歌Material Design";

            this.to_android_develop = "致安卓开发者";
            this.more_tips = "更多建议";

            this.lestore = " ";
            this.excel_demo = " ";
            this.jndroid_home = " ";
            this.calculator = " ";

            this.version = "版本号";
            this.show_more = "显示更多";
            this.show_less = "收起显示";
            this.change_log = "更新记录";
            this.comments = "~~~";
            this.qa = "联系";
            this.ask_question = "如需讨论，请加入QQ反馈群：105472201</br></br>Thanks to  Jndroid & LeanCloud";

            this.version_update = "版本已更新";

        } else {
        		this.ok = "ok";
        		this.cancel = "cancel";
        		
        	
            this.intro = "Introduction";
            this.getstart = "Getting Started";
            this.vs_android = "vs Android";
            this.doc = "Website Guide";
            this.app = "Application";
            this.about = "About";
            this.setting = "Setting";
            this.language = "Language";

            this.intro_content = "Jndroid is a JavaScript framework to write WebApp in Android way.";
            this.material_design = "Google Material Design";

            this.to_android_develop = "To Android Developer";
            this.more_tips = "More Tips";

            this.lestore = "App Store";
            this.excel_demo = "Excel Demo(multi-touch)";
            this.jndroid_home = "Jndroid Homepage";
            this.calculator = "Calculator";

            this.version = "Version";
            this.show_more = "show more";
            this.show_less = "show less";
            this.change_log = "Change Logs";
            this.comments = "Comments";
            this.qa = "Q&A";
            this.ask_question = "To ask question, please send email to fjytlibin@qq.com";

            this.version_update = "Version Updated";

        }
    }

    function _color() {
    		this.white = 0xffffffff;
    		this.red = 0xFFFF5722;
    		this.green = 0xFF4CAF50;
//      this.theme = 0xff0091ea;
		this.theme = 0xff00bb9c;
        this.card_bg = 0xffeeeeee;
        this.bg = 0xfffafafa;
        this.text = 0xff191919;
        this.secondary_text = 0xff454545;
        this.sub_text = 0xff757575;
        this.dividers = 0x1a000000;
        this.shadow = 0x66000000;
        this.wave = 0x1a000000;
        this.item_press = 0x22000000;
        this.mask_bg = 0x66000000;
    }

    function _dimen() {
        this.padding = 16;
        this.half_padding = 8;
        this.title_padding_top = 24;
        this.paragraph_padding_top = 66;
        this.content_padding_bottom = 66;
        
        this.padding32 = 32;
        this.padding24 = 24;

        this.corner = 2;

        this.supTitle = 44;
        this.title = 24;
        this.text = 14;
        this.sub_text = 12;
    }
}


