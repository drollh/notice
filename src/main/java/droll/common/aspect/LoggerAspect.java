package droll.common.aspect;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

import lombok.extern.slf4j.Slf4j;

@Component
@Aspect
@Slf4j
public class LoggerAspect {

    static String name = "";
    static String type = "";
     
    @Around("execution(* droll..service.*Impl.*(..)) or execution(* droll..mapper.*Mapper.*(..))")
    public Object logPrint(ProceedingJoinPoint joinPoint) throws Throwable {
        type = joinPoint.getSignature().getDeclaringTypeName();
         
        if (type.indexOf("Service") > -1) {
            name = "ServiceImpl  \t:  ";
        }
        else if (type.indexOf("Mapper") > -1) {
            name = "Mapper \t:  ";
        }
        log.info(name + type + "." + joinPoint.getSignature().getName() + "()");
        return joinPoint.proceed();
    }
}