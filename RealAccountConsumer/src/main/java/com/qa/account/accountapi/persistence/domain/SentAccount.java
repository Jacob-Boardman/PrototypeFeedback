package com.qa.account.accountapi.persistence.domain;

public class SentAccount {

    private Long accountId;

    private String username;

    private String password;

    private String fullName;


    public SentAccount() {
    }

    public SentAccount(Long accountId, String username, String password, String fullName) {
        this.username = username;
        this.password = password;
        this.fullName = fullName;
        this.accountId = accountId;

    }

	public Long getAccountId() {
		return accountId;
	}

	public void setAccountId(Long accountId) {
		this.accountId = accountId;
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

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

}