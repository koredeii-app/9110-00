package com.koredeii.supportdial;

import android.os.Bundle;
import androidx.activity.OnBackPressedCallback;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {

    @Override
    public void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);

        OnBackPressedCallback callback = new OnBackPressedCallback(true) {

            @Override
            public void handleOnBackPressed() {

                getBridge().getWebView().evaluateJavascript(
                    "(function(){ return !!(window.handleAndroidBack && window.handleAndroidBack()); })();",
                    value -> {

                        if ("true".equals(value)) {

                            return;

                        }

                        if (getBridge().getWebView().canGoBack()) {

                            getBridge().getWebView().goBack();

                        } else {

                            setEnabled(false);

                            getOnBackPressedDispatcher().onBackPressed();

                            setEnabled(true);

                        }

                    }
                );

            }

        };

        getOnBackPressedDispatcher().addCallback(this, callback);

    }

}
