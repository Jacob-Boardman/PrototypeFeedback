package com.qa.account.accountapi.persistence.domain;

public class SentAccount {

    private Long accountId;

    private String username;

    private String password;

    private String fullName;

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

	public SentAccount(){}

    public SentAccount(Account account){
        this.accountId = account.getId();
        this.username = account.getUsername();
        this.password = account.getPassword();
        this.fullName = account.getFullName();
    }


}
