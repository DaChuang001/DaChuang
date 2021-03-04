package com.example.demo.bean;

import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;

public class UserBean {
    private int iduser;
    private String username;
    private String password;
    private int progress;

    public int getIduser() {
        return iduser;
    }

    public void setIduser(int iduser) {
        this.iduser = iduser;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getProgress() {
        return progress;
    }

    public void setProgress(int progress) {
        this.progress = progress;
    }

    public JSONObject getJSONObject() {
        Map<String, Object> map = new HashMap<>();
        map.put("iduser", iduser);
        map.put("username", username);
        map.put("password",password);
        map.put("progress",progress);
        JSONObject obj = new JSONObject(map);
        return obj;
    }
}