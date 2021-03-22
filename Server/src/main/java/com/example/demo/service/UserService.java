package com.example.demo.service;

import com.example.demo.bean.UserBean;

import java.util.ArrayList;

public interface UserService {

    ArrayList<UserBean> loginIn(int iduser, String password);
    int getProgress(int iduser);
    int modifyProgress(int iduser,int progress);

}