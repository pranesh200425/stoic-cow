#include<stdio.h>

int main(void) {


  FILE *fp;

  char s[1024];
  int i = 0;

  FILE *nn;

  nn = fopen("quotes.txt", "w");

  fp = fopen("/home/spectre007/Downloads/stoic_quotes_full.csv", "r");
  while(i < 100){
    fgets(s, sizeof s, fp);
    printf("%d\n", i);
    fputs(s,nn);
  i++;
  }
printf("HEy");
  return 0;
}
