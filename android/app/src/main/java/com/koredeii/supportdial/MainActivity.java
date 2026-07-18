package com.koredeii.supportdial;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {

    @Override
    public void onBackPressed() {

        getBridge().getWebView().evaluateJavascript(
            "(function(){ return !!(window.handleAndroidBack && window.handleAndroidBack()); })();",
            value -> {

                if (!"true".equals(value)) {

                    MainActivity.super.onBackPressed();

                }

            }
        );

    }

}
