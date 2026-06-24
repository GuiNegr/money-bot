package com.money_bank.gui.neg.git.project.beans;

import org.springframework.context.annotation.Bean;
import tools.jackson.databind.PropertyNamingStrategies;
import tools.jackson.databind.json.JsonMapper;

public class ObjectMapper {
    @Bean
    public JsonMapper objectMapper() {
        return JsonMapper.builder()
                .propertyNamingStrategy(PropertyNamingStrategies.SNAKE_CASE).build();
    }
}
