export interface personal {
    section: string;
    detailEng: string;
    detailThai: string;
  }
  
export interface education {
    levelEng: string;
    levelThai: string;
    year: string;
    yearThai: string;
    nameEng: string;
    nameThai: string;
    majorEng: string;
    majorThai: string;
  }

export interface experience {
  level: string;
  levelThai: string;
  periodEng: string;
  periodThai: string;
  detailEng: expDetail;
  detailThai: expDetail;
}

export interface expDetail {
  first: string;
  second: string;
  third: string;
  fourth: string;
}