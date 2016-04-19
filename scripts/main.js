function MainView() {
	ViewGroup.apply(this);

	var introView = null;
	var vsView = null;
	var docView = null;
	var appView = null;
	var aboutView = null;

	mTitle = new Titlebar();
	this.addView(mTitle);

	var tab = mTitle.getTab();
	tab.setOnItemClickListener(function(i) {
		setTimeout(function() {
			switch (i) {
				case 0:
					cnt.addFragment(createIntroView(), "view=intro");
					break;
				case 1:
					cnt.addFragment(createDocView(), "view=cat");
					break;
				case 2:
					cnt.addFragment(createVsView(), "view=vs");
//					break;
//				case 3:
//					cnt.addFragment(createAppView(), "view=app");
//					break;
				case 3:
					cnt.addFragment(createAboutView(), "view=about");
					break;
			}
		}, 200);
	});
	tab.setSelectIndex(1);

	var callback = function(request) {
		var view = request["view"];
		var v;
		if (view == "about") {
			v = createAboutView();
			mTitle.setSelectIndex(3)
		} else if (view == "app") {
			v = createAppView();
			mTitle.setSelectIndex(3);
		} else if (view == "vs") {
			v = createVsView();
			mTitle.setSelectIndex(2);
		} else if (view == "cat") {
			v = createDocView();
			mTitle.setSelectIndex(1);
		} else if (view == "intro") {
			v = createIntroView();
			mTitle.setSelectIndex(0);
		} else {
			v = createIntroView();
			mTitle.setSelectIndex(0);
		}
		return v;
	};

	var cnt = new StateFrameLayout(callback);
	this.addView(cnt);

	this.onMeasure = function(wMS, hMS) {
		Manifest.setIsPhone(window.innerWidth <= 720);

		var w = MS.getSize(wMS);
		var h = MS.getSize(hMS);

		Utils.measureExactly(mTitle, w, 48);

		var cntH = h - mTitle.getMH();
		cnt.measure(wMS, cntH);

		this.setMeasuredDimension(w, h);
	};

	this.onLayout = function() {
		var x = 0;
		var y = 0;
		mTitle.layout(x, y);

		y += mTitle.getMH();
		cnt.layout(x, y);
	};

	function createIntroView() {
		if (introView == null) {
			introView = new IntroView();
		}
		return introView;
	}

	function createVsView() {
		if (vsView == null) {
			vsView = new VSAndroidView();
		}
		return vsView;
	}

	function createDocView() {
		if (docView == null) {
			docView = new DocView();
		}
		return docView;
	}

	function createAppView() {
		if (appView == null) {
			appView = new AppView();
		}
		return appView;
	}

	function createAboutView() {
		if (aboutView == null) {
			aboutView = new AboutView();
		}
		return aboutView;
	}
}