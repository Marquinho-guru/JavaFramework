
package com.marco.cxfsoap;

import javax.jws.WebService;

@WebService(endpointInterface = "com.marco.cxf-soap.HelloWorld")
public class HelloWorldImpl implements HelloWorld {

    public String sayHi(String text) {
        return "Hello " + text;
    }
}

