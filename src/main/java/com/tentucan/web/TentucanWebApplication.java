package com.tentucan.web;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.oauth2.client.EnableOAuth2Sso;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@SpringBootApplication
@EnableOAuth2Sso
public class TentucanWebApplication extends WebSecurityConfigurerAdapter {


	public static void main(String[] args) {
		SpringApplication.run(TentucanWebApplication.class, args);
	}

	@Override
	protected void configure(HttpSecurity httpSecurity) throws Exception {
		httpSecurity
				.antMatcher("/**")
				.authorizeRequests()
				.antMatchers("/", "/login**", "/public/**", "/node_modules/**")
				.permitAll()
				.anyRequest()
				.authenticated();
	}
}
