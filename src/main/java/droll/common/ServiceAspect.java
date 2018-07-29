package droll.common;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.springframework.stereotype.Component;

import lombok.extern.slf4j.Slf4j;

@Aspect
@Component
@Slf4j
public class ServiceAspect {

    static String name = "";
    static String type = "";
     
    @Around("execution(* droll..controller..*Controller.*(..)) or execution(* droll..service.*Impl.*(..)) or execution(* droll..mapper.*Mapper.*(..))")
    public Object logPrint(ProceedingJoinPoint joinPoint) throws Throwable {
        type = joinPoint.getSignature().getDeclaringTypeName();
         
        if (type.indexOf("Controller") > -1) {
            name = "Controller  \t:  ";
        }
        else if (type.indexOf("Service") > -1) {
            name = "ServiceImpl  \t:  ";
        }
        else if (type.indexOf("Mapper") > -1) {
            name = "Mapper \t:  ";
        }
        log.debug("디버그 : " + name + type + "." + joinPoint.getSignature().getName() + "()");
        log.info("인포 : " + name + type + "." + joinPoint.getSignature().getName() + "()");
        return joinPoint.proceed();
    }
}
	