package com.example.demo.mapper;

import com.example.demo.bean.UserBean;
import org.apache.ibatis.annotations.Mapper;

import java.util.ArrayList;

@Mapper
public interface UserMapper {

    ArrayList<UserBean> getInfo(int iduser, String password);
    int getProgress(int iduser);
    int modifyProgress(int iduser,int progress);

}