package com.sampleapp.comparator;

import java.util.Objects;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class ComparatorService {

    private Logger logger = LoggerFactory.getLogger(ComparatorService.class);

    public boolean compare(CompareInput input) {
        logger.info("Comparing argument1: {} and argument2: {}", input.argument1(), input.argument2());

        return Objects.equals(input.argument1(), input.argument2());
    }
}
