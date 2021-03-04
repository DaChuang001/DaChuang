package com.example.demo.controller;

import com.example.demo.bean.UserBean;
import com.example.demo.service.UserService;
import org.json.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;

@Controller
public class LoginController {

    //将Service注入Web层
    @Autowired
    UserService userService;

    @RequestMapping(value = "/user/login",method = RequestMethod.POST)
    @ResponseBody
    public String login(@RequestBody UserBean user){
        ArrayList<UserBean> userBean= userService.loginIn(user.getIduser(),user.getPassword());
        return getUser(userBean);
    }

    public static String getUser(ArrayList<UserBean> checkItemIds) {
        if (checkItemIds.isEmpty()) {
            return null;
        }
        JSONArray jsonArray = new JSONArray();
        for (UserBean item : checkItemIds) {
            jsonArray.put(item.getJSONObject());
        }

        return jsonArray.toString();
    }


}