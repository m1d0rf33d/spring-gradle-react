package com.yondu.rush.config;

import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.ReloadableResourceBundleMessageSource;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;
import org.springframework.web.servlet.view.InternalResourceViewResolver;

/**
 * Created by aomine on 10/20/16.
 */
@Configuration
@ComponentScan(basePackages = "com.yondu")
@EnableWebMvc
@EnableAuthorizationServer
@EnableResourceServer
public class WebConfiguration extends WebMvcConfigurerAdapter {

    private static final String MESSAGE_SOURCE     = "/WEB-INF/i18n/messages";
    private static final String VIEWS              = "/resources/";
    private static final String RESOURCES_LOCATION = "/resources/";
    private static final String RESOURCES_HANDLER  = RESOURCES_LOCATION + "**";


    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler(RESOURCES_HANDLER).addResourceLocations(RESOURCES_LOCATION);
    }

    @Bean(name = "messageSource")
    public MessageSource messageSource() {
        ReloadableResourceBundleMessageSource messageSource = new ReloadableResourceBundleMessageSource();
        messageSource.setBasename(MESSAGE_SOURCE);
        messageSource.setCacheSeconds(5);
        return messageSource;
    }

    @Bean
    public InternalResourceViewResolver internalResourceViewResolver() {
        InternalResourceViewResolver internalResourceViewResolver = new InternalResourceViewResolver();
        internalResourceViewResolver.setPrefix(VIEWS);
        internalResourceViewResolver.setSuffix(".html");

        return internalResourceViewResolver;
    }


    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**");
    }
   /* @Bean
    public CommonsMultipartResolver multipartResolver() {

        return new CommonsMultipartResolver();
    }*/

}