/* The sequence of log messages follows the prescribed hook calling order:

HOOK ORDER	LOG MESSAGE
1	OnChanges
2	OnInit
3	DoCheck
4	AfterContentInit
5	AfterContentChecked
6	AfterViewInit
7	AfterViewChecked
8	DoCheck
9	AfterContentChecked
10	AfterViewChecked
11	OnDestroy
