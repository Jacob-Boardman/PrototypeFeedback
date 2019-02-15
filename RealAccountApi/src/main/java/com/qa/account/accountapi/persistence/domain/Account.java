package com.qa.account.accountapi.persistence.domain;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToOne;

@Entity
public class Account {
    @Id
    @GeneratedValue
    private Long accountId;

    private String username;

    private String password;

    private String fullName;

    public Account() {
    }

    public Account(Long accountId, String username, String password, String fullName) {
        this.username = username;
        this.password = password;
        this.fullName = fullName;
        this.accountId = accountId;
    }

    public Long getId() {
        return accountId;
    }

    public void setId(Long id) {
        this.accountId = id;
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

	public String toString() {
    	return this.accountId + this.username + this.password + this.fullName;
    }
}
