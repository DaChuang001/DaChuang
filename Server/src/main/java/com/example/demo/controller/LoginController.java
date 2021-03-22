package com.example.demo.controller;

import com.example.demo.bean.UserBean;
import com.example.demo.service.UserService;
import org.json.JSONArray;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;

@Controller
@CrossOrigin(origins = "*",maxAge = 3600)
public class LoginController {

    //将Service注入Web层
    @Autowired
    UserService userService;

    @RequestMapping(value = "/user/login",method = RequestMethod.POST)
    @ResponseBody
    public String login(@RequestBody UserBean user){
        System.out.println("登录");
        System.out.println(user.getIduser()+user.getPassword());
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