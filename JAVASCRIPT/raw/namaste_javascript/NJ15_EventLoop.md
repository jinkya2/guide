#   HOW JS ENGINE EXECUTES THE CODE USING CALL STACK
  
  JavaScript is a synchronous single threaded language. It can do only one thing 
  at a time, and that too in specific order.
  
  Have one call stack, present inside JS Engine
    
  When the JavaScript Engine encountners a code and try to render it, it creates and 
  a global execution context attaching global object (browser- window and node- global; 
  ECMAScript globalThis) with all web API methods like setTimeout, DOM API, fetch(), 
  localStorage, console, location etc and push it into the "call stack". Now when it finds 
  a new function execution during code running, it will create a new Execution COntext for it 
  and push it into it. Now if the function again contains some function def and call, it will go
  on and on and.... So eventually whenever the last inserted execution context is executed, it
  will be removed from the "call stack" and the control will go to the next available 
  execution context. And finally when whole program finishes, the Global Execution Context
  will be remove from the "call stack" and it will be empty. 
  
  Call stack does not wait for anything, if you provide a function it must execute it
  immediately. But what if something needs to wait, like setTimeout function? Call stack
  cant wait for them. Call stack does not have a timer.
  
  
  
  
  
 #  BEHIND THE SCENES IN BROWSER
  ![browser_details](https://lh3.googleusercontent.com/7KqgIaZTC9QUd19E_p6BaYp-9GuHtJ6LeDBX60LbSIm1YVZQQ1f70WTQ3MxVcF3x5pjISh7HGbGy73cRtx5pjwwFpxieb-RNxETVIbanImPLd6uXOduOegZLJArFRVM7dGiQML74yKzwGxfSXQlrm1JR9lnCysYDAp1J8u_FPkBzqLLunJ-6gtGUdqCseskd3ABPJ9Rr4nRX9jlDJehxQVRoyzsC-UYj1UBR4aMRZMRpgz5SXnP8NDiJPlBdKO3HVDLhVG-HI_gUpFZtvLuYGhLFbnoIVp6Emkgs2czKO9EdWkIEdaJ0D0Z6_3SCa8sW4y4L7gjSL4kv8bIgebewtr14IL47Pq9FsZtl0Zv10Z9BQxAqEFteAUjag9YDDqS5f-1ASXTFsZn3t8edza_18PJ3fKEPh8bOqWjCjYNq3qvwgJRVWGRaKDH0gjl1mtsYmRaa_BMyZNQrg3SxzimojjJAfVlA3ngAPJvbVSQrQlwms5yNQDumtjQ9JnHsg1PXjcJj1L_n9w_c8MWgxEOO5Jr3x1Sf6q8Na8de_kVTCEgmtaYSTLKmF3ZwYdHR8ClYhaE4R3__9FDH4uMFKqEEkQE_X5CYijNa-pezZaASk63B5KTpDnRmXxUTxGnNaJpFtf-egDErzZ2xcEr5zhlklQHjlEgw6GIvhkQVPxxb86ezNs65gv5EzYveQ6AN9dXmJUrNrU7OvA4Wm_zK7Ah9I2GALCykGojyRuvNt8ZxXpeBeOZILLAknkd2U_4_nw=w2466-h1276-no?authuser=0)
  
  All the web APIs like DOM, setTimeout, fetch, console, localstorage, location etc are not part of core JavaScript.
  Browser give access to all these powers with global object to the JavaScript Code via Global Execution Context.
  Global Object => Browser(window), NodeJS(global), ECMA(globalThis)


  ![Browser_web_APIs](https://lh3.googleusercontent.com/xMABFAF0EBxSx5LQNbrYZCF-tMwrCxsMfV63-Akn3BmPrWc2vAxciRIzG_JFxExYMdFH0zuSrwMt2QNFcfvyJObOmEhiUuXzBODiIl7RTVebpH8kj9gTHk_1h-NXEFzEz_0TO8ql2zJCpOoVQsU5sZcvLgIQKd8v0XEFiNU_VcNK6oB6kKbKRRn8aawabd3fuphxcSZ_jbBv5lZ-Bxo4cYkFcmuWqp6w6R5KBIBI9rEHsnkLt3TiCcmLM0g2WMYgI2SdpVUQFmtg9xHZozlw-GNlkZyvBEJurjlfnh__6ef4zS41syF3dfpz2wi5SRD70aKDQDsBWde0rW-pXv9n5EPp-OQI4Nq2bkOshQA38hQupjD_39GQ4j0ZhEVHxRRppVkOdw7UZBYKHPjL7-rb-ks7a1MdEXHPGHN6PAF7VpbY0_y5r8WFybZQ_l6zJzAz8Yn1FCZpp3mnicu4q0fR8xSxbfjn8uO2abGC90CLFjZhHhmzZypk2vracZG5g9PCsuCsdC2h8tR_o1C0qhh3IdwCI2x8fhfq_04CLiwTgzug30qduOEQnsgrilRHqev9qebxRVn6dQpje0JPJTir1h5mEMHVz0CXqK2nXKUStm95HElKGEDeekAPMD_3GYmqByv_BmGJzse5biRNn0Gq5YQH9z91ze7XkGDAS6uv0nR3hBl2GmdBxZUD1VljYOgsOloWxWX0I1FZ2t7Nr2DUQIa8YroTWbvQrEQOIAjELwEszWQ_C-apbTgxGKcUtw=w1952-h1300-no?authuser=0&authuser=0)

  ![timer_and_callstack](https://lh3.googleusercontent.com/j_gpftAFen__AXX6YabNkLhAxn9S6DcGgR1BXYJSnjzYj8S0sk-4VdnH2sAp3glG2ZNOwJkXAINL4-Yp0gRQAjp4kpPAUbVJJ5nguW0CLdTupzix9oHusI_WjSjCQgQzFJNILGv0lfGbgSLk5_P7yO42vV059IpRJE8fQyAWtrBtvQRcfnZpnbrFY9yCvyuTdmJAjlnGrikhGmLJkfkHFUOwAeRIIadDP5HXuj9C-r1FCcsInHZfr4SVdrNgdXd1e5TwO45FV13_owT9UyyhXUKhdh9yTEV1fQlLyBbN9SLsd9eRJqBepRGj_XzDvODL5HTM1Wzvqf0WqARgs_-GNduiB4jObHbCJZVi50P4_8PuAe9xxhQj-3dI1VOCG5G5DtG6oHXIMVBSK8OAGrhX2XYyAn9VM9qj9eFzr9kwWXHOcQcmS45wJXAgyEzxeRHzl1W8_m_aGeEF2dBvhyo6v2LI5lqd85l4vPYGSLYrbus7hZawJs4_jc9d6WYq0RRq5YqmGrk4BSDXOIuBtLD3q3_q7TankrauVhgTR-sm1M5zLO27s7q0rCrujA6eh5d56xhi80YACX9jRWr-UCxNnKRIJ8ccsbytVQ9tPa131tnt1eYDGY2eMi5OtLbTd-N3uKV1eigxs6FcxUVAAz8KBh-viB9SCpRIAO76Lgyi07xBlLznBUwc3WzRvAaXvE80GUNqutkmly8SsSNo08HMCWAFa5xq53A2v-BJoWN-WJLQd3jqTWD4DBUJjk2grA=w2450-h1270-no?authuser=0&authuser=0)






# EVENT LOOP AND CALLBACK QUEUE
The call stack dont wait for anything, thus when it encounters a timer, the browser registers the callback and return the execution to Call stack and ones if before the timer finishes the Global execution context is poped out. When the timer finishes, it pushes the cb in callback queue which event loop constantly monitors and if found something pushes into empty Call stack for execution.

![callstack_eventloop_callbackqueue_timer](https://lh3.googleusercontent.com/fRl5ebQQK8PwyGXXZIvHSf3859VWM9-P2F1VUdOjrmJm32tzplnYNP27AnORHQQAy4JZ1s5z8FGmFcnsEBVFbifbks0TdGJw15LTGPQeVOThpB09PDFCTsoAM4ZAI3N_yB9qumyllod14PAGYbuCbKVtw7E7r3wt4n8XCrSq_HkOXsY5tVv673oPhjc3ogmkHjjmrKpxdAGhevJFqIh9IvJDbhuqv0YDb2338MwUB3Ug-KzDJ4MLg5QOOeM3h-9fyB9MeZmN1Dao1sEb70ZUMUtqFXeyqIKKul9cqvZOS-KmBQNXRBzzNI0lD5BwRlDO3rQK09q-Po-ZtAKRlTROnTPMxof7Gb3qzDCMunvCxMUye2YZCWclDiiFszJu21Pr65lCA1gtPLUoR1PvhC00zyUl5MX90rl_vKccJ9f3XcbiqrzSR5RD8aMB4iHvIoQ8_HKF8wsyrMFvR2eQ87pvUX1y3LJLSmfziX5-HrwtWZQab2tS1NsBSUiGp0mNzYijOteSGF2zwkipXyOIgNyV3HhdtgXswE42HHam1ci7OzDGRvKlBn3rnf8M8TZapUFDmOfHnx831LCwXBO0LdaL_6q-I5uQGYnkx7OpN2sSM2ZNHHnvoXRSIeS5hI-HAP57I2WDI2A9RRKZzahqnLyLtHta0fQbEdc5e9yN5afYxxaA9-EWz7er03qKiWILA5gR8_tEaF34gCa2c76Wxtpmffw_Pc5w8eR8eMNG4fePDyRFpjjpG26F2I-b0a9t1Q=w2452-h1262-no?authuser=0&authuser=0)




# EVENT HANDLER
![eventhandler_callback](https://lh3.googleusercontent.com/kSJkX3cNUuoPOnjNG4b-Hq3DYp0L2dBseAlw-JLlTlvDV49YJkldVcQ_9DyCU-deSiYbKmLiDHkioEOmrkbCBlpSaZtDBtbG70vh23RmEs4D5B96tcVcXXyivCTdgajSvb3kIhlMm-x3tgODNtT4Wyy1iXiFvCpZNaOLfi2SZswU9zzBKxSg2EKWLNJTcCU5CSbYKL61XDqQOteVVnO__gyr6kSYMG0IFZBaGfZ-s4cSabNgHx6mrYRFH0XC86UwvXGeHdtW412eVOZIt9S5MD3g4_seGxbM09D6a4UPStgLUkHo9sjBAKbWFu8T10gbipq2igwrqyd3BdCoiTS4M4WdmZSR5KBdhAQFGS_MPAtOxmVmN3cbvpZyBcwcZY-q3XempI3tS0cbK-XG320K8AaApzZGZVUufqBI0SNGdbyMF8-U_HjGO-kKUxGIPQ7Fvk2lkOgzMr5UJ2R4ZONDaObglyWNKcpSXodMbNmO-kU2Dya39YsbykarIl6Z9WM-rHtk-YmWGnuzYZow9x1qNr4TYLGUeG7l6h6TcyDaC8hv68W5Cebc-tONmKmcmaAIjV514JeeTbKy5qQAsgVfSOoeHm5voGJ0wlYo4QeQjrtrp-ooUZIEG22WdO4ZhTp_OP3GtnTdcDeuOGTL2a4VxV0fIQm8jEsmpeMtzpLAQQA3msSNkasSUfGx5nyHsCLAoUEv8qJWmhCgvShLbeV5beKi_YX0sT19XtC8Elhg_dLDfijgzbnnIrfKpp6gyA=w2378-h1252-no?authuser=0&authuser=0)



Why callback Queue is require?
JavaScript call stack is kind of hot compiler, it needs to execute code fast for performance. And the Web APIs can have multiple behaviours like continuously clickiing event listeners so they need to be staxked in callback queue and when call stack is empty, pushed into it by Event Loop.
 


# How fetch works?
Microtask queue is dedicated que for fetch/ network calls. It have higher preference than callback queue. All the callback functions that comes from promises will come under microtask queues. Mutation observer which basicaly checks if their is change in DOM tree comes under microtask queues.

![microtask_queue](https://lh3.googleusercontent.com/TuvTD91EieuqL2__-Pu71ZVRfC0kcy4ltVfDtGyRp9BnVMfovfiA-OgpMhOQ0dDl7CxyOQHSHBeAoPgWAQvAis7fYPQYik_LshZCBF6oZbwbZnPlb6PNvvH-Yi0p5vzxgUkf-Px9NL0QDhX5YbeKpSNfgDpXCCjc9xrGT6xbouzofgeHPh6c3iYMTlCZP0t3DMlNK4euOOxZ8lp9Yz5E5MgriuiNwKcjHbWqFjnCa1N_O3vSowzlKiy7o13RsG4ooz0cflBmVCR4O5sVER_ctuBhRJ2wXSl_vOPTOGSZiLuu0j8E2kte_migyv3rbTvgen09FkQfJzbUDiNFKaabdcuIMBJBZ-FYeK8wOxqJByaM9p58N_qxFZu3NvIAdFr7d4UwglVorF5HPzeKdsLWvSUhG3jpOfC3BXs9lcrdMcCDvjr6Mt6quWvSpjYJDQgl8vCBiMxHSVGnpffICFyvJOIUK1PMBXgZSvYsH2jeg96Blrze21iG1oziq_QKWbUO69QaR9T3xKbZCnPartHPifh4L2bIP7J6Bq9C1wL3JJaEfuPRTK-0uSbmx-VJbsLtkc4sCvkTsLvUCLCLiuKCzMlNcC8UcXKmkZDaSAvLiA5c70NzQlwT6BzAxAMYC7NJG7p2ibD7pTI-59PdmsNbCJMoWD8i6IH1KOUf09_R5m3yc1U69Q3ESSwmvVR7KgKz1cL0pQVoX7UlRPjgGVSXMks7jS93UTppMZT3HNVa86P03xlJPRtyrLh3cdcyKw=w2452-h1260-no?authuser=0&authuser=0)

Starvation of callback queues - Sometimes the microtask can create sub microtask and it goes on And as the microtasks have more priority than callback queues, it will starve for execution.