package com.murphy.mall;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.circuitbreaker.EnableCircuitBreaker;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;

/**
 * 文件上传 - 启动器
 *
 * @author murphy
 * @since 2022/4/5 15:09
 */
@SpringBootApplication
@EnableDiscoveryClient
@EnableFeignClients
@EnableCircuitBreaker
public class UploadApplication {

    public static void main(String[] args) {
        SpringApplication.run(UploadApplication.class,args);
    }

}