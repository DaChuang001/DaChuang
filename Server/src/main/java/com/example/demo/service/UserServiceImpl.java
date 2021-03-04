package com.example.demo.service;

import com.example.demo.bean.UserBean;
import com.example.demo.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
public class UserServiceImpl implements UserService {

    //将DAO注入Service层
    @Autowired
    private UserMapper userMapper;

    @Override
    public ArrayList<UserBean> loginIn(int iduser, String password) {
        return userMapper.getInfo(iduser,password);
    }
}