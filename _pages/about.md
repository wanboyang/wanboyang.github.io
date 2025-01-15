---
permalink: /
title: "Dr."
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>
I have become a master's supervisor and have started mentoring master students now. 
I am working at the Artificial Intelligence & Bio-information Cognition (AIBC) Group of Jiangxi Science and Technology Normal University.
I received my B.E. degree in Electronic and Information Engineering from the Polytechnic Institute of Jiangxi Science and Technology Normal University in 2012, and the M.S. degree, which is advised by Prof. Zhijian Yan and co-advised by [Prof. Feiniu Yuan](http://staff.ustc.edu.cn/~yfn/), in signal and information processing with the School of Communications and Electronics, Jiangxi Science and Technology Normal University, Nanchang, China, in 2018. In 2022, I obtained the Ph.D. degree, which is advised by [Prof. Yuming Fang](https://scholar.google.com/citations?user=_Tu-eHkAAAAJ&hl=zh-CN&oi=ao) , from Jiangxi University of Finance and Economics, Nanchang, China. 
  
My research interest includes visual understanding, image captioning, and pattern recognition. I have published 10 papers at international AI conferences and journals with total<a href='https://scholar.google.com/citations?user=xXDl1kgAAAAJ&hl'> Google Scholar citations <strong><span id='total_cit'>300+</span></strong></a> (<a href='https://scholar.google.com/citations?user=xXDl1kgAAAAJ&hl'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>).

# 👨‍🎓 Students

PhD Students
<div class="student-grid">
  <div class="student-item">
    <img src="images/apple-touch-icon.png" alt="储晨曦" class="student-avatar">
    <p>储晨曦</p>
    <p class="student-description">Visiting Student</p>
  </div>
</div>
Master Students
<div class="student-grid">
    <div class="student-item">
    <img src="images/朱思惠圆形大头照.png" alt="朱思惠" class="student-avatar">
    <p>朱思惠</p>
    <p class="student-description">Co-advised</p>
  </div>
  <div class="student-item">
    <img src="images/黄潇扬圆形大头照.png" alt="黄潇扬" class="student-avatar">
    <p>黄潇扬</p>
    <p class="student-description">Co-advised</p>
  </div>
  <div class="student-item">
    <img src="images/徐佳仅圆形大头照.png" alt="徐佳仅" class="student-avatar">
    <p>徐佳仅</p>
  </div>
</div>
<style>
.student-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 30px;
}
.student-item {
  text-align: center;
}
.student-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}
.student-description {
  font-size: 0.8em;
  color: #666;
  margin-top: -10px;
}
</style>



# 📝 Publications 
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICBTI 2024</div><img src='images/ICBIT2024_framework.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Protein Subcellular Localization Prediction based on Residual Kolmogorov-Arnold Networks](https://dl.acm.org/doi/abs/10.1145/3700486.3700490)

Xiaoyang Huang **Boyang Wan**, Si-hui Zhu, Suwan Zhu, Kaiwen Xiao, Fan Yang*
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICNNICE 2024</div><img src='images/icc2024.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[MMLoc: A Multi-instance Multi-label Learning Approach for Predicting Protein Subcellular Localization from Immunofluorescence Images](https://ieeexplore.ieee.org/document/10499079)

Zhihai Zhang, **Boyang Wan**, Suwan Zhu, Fan Yang*
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">VCIP 2022</div><img src='images/vcip_2022_framework.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Dual-stream Self-attention Network for Image Captioning](https://github.com/wanboyang/wanboyang.github.io/blob/main/docs/VCIP2022.pdf)


**Boyang Wan**, Wenhui Jiang, Yuming Fang, Wenying Wen, Hantao Liu


</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICASSP 2022</div><img src='images/icassp_framework.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Informative Attention Supervision for Grounded Video Description](https://github.com/wanboyang/wanboyang.github.io/blob/main/docs/Informative_Attention_Supervision_for_Grounded_Video_Description.pdf)

**Boyang Wan**, Wenhui Jiang, Yuming Fang

[**Project**](https://github.com/wanboyang/IASGVD_ICASSP2022)
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Pattern Recogition</div><img src='images/pr2021_fig_framework.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Revisiting image captioning via maximum discrepancy competition](https://github.com/wanboyang/wanboyang.github.io/blob/main/docs/Revisiting%20image%20captioning%20via%20maximum%20discrepancy%20competition.pdf)

**Boyang Wan**, Wenhui Jiang, Yuming Fang, Minwei Zhu, Qin Li, Yang Liu

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IET IP</div><img src='images/ietdata.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Anomaly Detection in Video Sequences: A Benchmark and Computational Model](https://github.com/wanboyang/wanboyang.github.io/blob/main/docs/IET%20Image%20Processing%20-%202021%20-%20Wan%20-%20Anomaly%20detection%20in%20video%20sequences%20%20A%20benchmark%20and%20computational%20model.pdf)

**Boyang Wan**, Wenhui Jiang, Yuming Fang, Zhiyuan Luo, Guanqun Ding

[**Project**](https://github.com/wanboyang/anomaly_detection_LAD2000) 
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICME 2020</div><img src='images/icme2020_framework.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Weakly Supervised Video Anomaly Detection via Center-Guided Discriminative Learning](https://github.com/wanboyang/wanboyang.github.io/blob/main/docs/Weakly_Supervised_Video_Anomaly_Detection_via_Center-Guided_Discriminative_Learning.pdf)

**Boyang Wan**, Yuming Fang, Xue Xia, Jiajie Mei

[**Project**](https://github.com/wanboyang/Anomaly_AR_Net_ICME_2020)
</div>
</div>

# 🔥 News
- *2024.8*: &nbsp;🎉🎉 One paper are accepted by International Conference on Biomedical and Technological Innovation 2024.
- *2024.2*: &nbsp;🎉🎉 One paper are accepted by International Conference on Neural Networks, Information and Communication Engineering 2024.
- *2023.2*: &nbsp;🎉🎉 I join the Artifical Intelligence & Bio-information Cognition (AIBC) Group of Jiangxi Science and Technology Normal University as a lecturer in China.  
- *2022.12*: &nbsp;🎉🎉 I have defended my doctoral dissertation and received my PhD degree from Jiangxi University of Finance and Economics.  
- *2022.10*: &nbsp;🎉🎉 One paper are accepted by VCIP 2022.
- *2022.3*: &nbsp;🎉🎉 One paper are accepted by Pattern Recogition.
- *2022.3*: &nbsp;🎉🎉 One paper are accepted by ICASSP 2022.




# 🎖 Honors and Awards
- *2021.10* The First Prize Scholarship, Jiangxi University of Finance and Economics
- *2020.10* The First Prize Scholarship, Jiangxi University of Finance and Economics
- *2019.10* The First Prize Scholarship, Jiangxi University of Finance and Economics

# 📖 Educations
- *2018.09 - 2022.12*, Jiangxi University of Finance and Economics, PHD IN SERVICE COMPUTING AND APPLICATIONS, Advisor: Pro. Yuming Fang. 
- *2015.09 - 2018.06*, Jiangxi Science and Technology Normal University. MS IN SIGNAL AND INFORMATION PROCESSING, Advisor: Pro. Zhijian Yin. 

# 💬 Invited Talks
- *2020.06*, Weakly Supervised Video Anomaly Detection via Center-guided Discriminative Learning. IEEE ICME, Landon, UK. (Virtual)
- *2022.03*, Informative Attention Supervision for Grounded Video Description. IEEE ICASSP, Singapore. (Virtual)
- *2022.12*, Dual-stream Self-attention Network for Image Captioning. IEEE VCIP, Suzhou, China. (Virtual)

  
#  💰 Funding
2023, Doctoral Start-up Fund, 150,000 RMB

2024, Jiangxi Provincial Natural Science Foundation Youth Fund, 100,000 RMB
