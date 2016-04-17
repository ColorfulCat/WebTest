function SettingView() {
    ViewGroup.apply(this);

    this.setBackgroundColor(0xffffffff);
    this.setBoxShadow(0, 0, 16, 0, R.color.shadow);

    var cnt = new LinearLayout();
    this.addView(cnt);

    var title = Theme.createTitle("你好啊~");
    title.setTextColor(R.color.theme);
    title.setPadding(R.dimen.padding);
    title.setBorderBottom(1, R.color.dividers);
    var titleLp = new LayoutParams(LayoutParams.FILL_PARENT, 48);
    titleLp.topMargin = 48;
    cnt.addView(title, titleLp);

    var languageTitle = Theme.createText("此处备用，并没有什么功能~");
    languageTitle.setPadding(R.dimen.padding);
    var subTitleLp = new LayoutParams(LayoutParams.FILL_PARENT, 48);
    cnt.addView(languageTitle, subTitleLp);
    
//  http://7xki8q.com1.z0.glb.clouddn.com/android-1.png
	var myImage = new ImageView();
	var imageLp = new LayoutParams(LayoutParams.FILL_PARENT, 256);
	myImage.setScaleType(ScaleType.FIT_CENTER);
	myImage.setImageUri("http://7xki8q.com1.z0.glb.clouddn.com/android-1.png");
	cnt.addView(myImage, imageLp);

    var zhRadioButton = new MRadioButton();
    zhRadioButton.setText("中文");
    zhRadioButton.setId(0);
    zhRadioButton.setColor(R.color.theme);

    var enRadioButton = new MRadioButton();
    enRadioButton.setText("English");
    enRadioButton.setId(1);
    enRadioButton.setColor(R.color.theme);

    var languageGroup = new MRadioGroup();
    languageGroup.addChild(zhRadioButton);
    languageGroup.addChild(enRadioButton);
    languageGroup.setOnCheckedChangeListener(function(id) {
        setTimeout(function() {
            if (id == 0) {
                localStorage["language"] = "zh";
            } else {
                localStorage["language"] = "en";
            }
            location.reload();
        }, 200);
    });
    var languageLp = new LayoutParams(LayoutParams.FILL_PARENT, LayoutParams.WRAP_CONTENT);
    languageLp.leftMargin = R.dimen.padding;
//  cnt.addView(languageGroup, languageLp);

    if (Manifest.language.indexOf("zh") >= 0) {
        zhRadioButton.setChecked(true);
    } else {
        enRadioButton.setChecked(true);
    }

    this.onMeasure = function(wMS, hMS) {
        var w = MeasureSpec.getSize(wMS) * 2 / 3;
        var h = MeasureSpec.getSize(hMS);

        if (w > 300) {
            w = 300;
        }
        cnt.measure(w, h);

        this.setMeasuredDimension(w, h);
    };

    this.onLayout = function() {
        cnt.layout(0, 0);
    }
}
