function VSAndroidView() {
	LinearLayout.apply(this);
	var layoutParam = new LayoutParams(LayoutParams.FILL_PARENT, LayoutParams.FILL_PARENT);
	var mWebView = new WebView();
	mWebView.loadUrl("http://androidcat.com/");//http://133.130.120.73:9000/
	this.addView(mWebView, layoutParam);
	this.requestLayout();
}