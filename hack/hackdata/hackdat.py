#
#from datetime import date
#from datetime import time
#from datetime import datetime
#def main():
#    today=datetime.now()
#    print(today)
#    wd = date.weekday(today)
#    days= ["monday","tuesday","wednesday","thursday","friday","saturday","sunday"]
#
#if __name__== "__main__":
#    main()
#    

import sched, time
s = sched.scheduler(time.time, time.sleep)
def do_something(sc): 
    print ("Doing stuff...")
    # do your stuff
    s.enter(5, 1, do_something, (sc,))

s.enter(5, 1, do_something, (s,))
s.run()