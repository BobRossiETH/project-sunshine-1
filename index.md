---
layout: default
---


<header class="">
 <div class="px-4 py-5 mt-md-5 text-center">
    <h1 class="display-3 fw-bold">Project Sunshine</h1>
    <div class="col-lg-7 mx-auto">
      <p class="lead fw-normal mb-4">A dashboard to measure the health of Ethereum's decentralization.</p>
      <!-- <a href="#about" class="btn btn-outline-dark btn-lg px-4 m-1">Learn More</a> -->
    </div>
  </div>
</header>

<section id="" class="">
  <div class="container mb-5">
    <div class="row justify-content-center">
      {%- assign metrics = site.data.metrics -%}
      {%- for metric in metrics -%}
        <div class="col-12 col-sm-10 col-md-8 col-lg-6 mb-3">
          <div id="{{metric.id}}" class="card h-100 bg-eth">
            <!-- <h5 class="card-header">{{metric.title}}</h5> -->
            <div class="card-body d-flex flex-column">
              <div class="row flex-grow-1">
                <div class="col-12 col-sm-8 col-xl-9">
                  <h5 class="card-title">
                    {{metric.title}}
                    {%- if metric.tooltip_enabled -%}
                      <span data-bs-toggle="tooltip" data-bs-placement="top" title="{{metric.tooltip_text}}">
                        {{site.data.icons.tooltip}}
                      </span>
                    {%- endif -%}
                  </h5>
                </div>
                <div class="d-none d-sm-inline col-4 col-xl-3">
                  <div class="form-floating">
                    {%- if metric.data_sources.size > 1 -%}
                      <select id="floatingSelect" class="form-select form-select-sm" aria-label="data source select">
                        <!-- <option selected disabled hidden>Data Source</option> -->
                        {%- for source in metric.data_sources -%}
                          {%- assign selected = "" -%}
                          {% if my_array.first %}{%- assign selected = "selected" -%}{% endif %}
                          <option value="1"{{selected}}>{{source}}</option>
                        {%- endfor -%}
                      </select>
                      <label for="floatingSelect">Select Data Source</label>
                    {%- else -%}
                      <select id="floatingSelect" class="form-select form-select-sm" aria-label="disabled data source select" disabled>
                        {%- for source in metric.data_sources -%}
                          <option value="1" selected>{{source}}</option>
                        {%- endfor -%}
                      </select>
                      <label for="floatingSelect"><div class="ms-2">Only Data Source</div></label>
                    {%- endif -%}
                  </div>
                </div>
              </div>
              <!-- <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> -->
              <div class="mb-2">
                <!-- <label class="form-label my-0 py-0 fw-normal small">Current Value - 50%</label> -->
                <label class="form-label fw-normal small">
                  Goal: < {{metric.goal}}%
                  <span class="mx-1 mx-xl-2">|</span>
                  Danger: {{metric.danger}}% +
                  <span class="mx-1 mx-xl-2">|</span>
                  Target: {{metric.target}}%
                  {%- if metric.target_date -%}
                    <span class="d-none d-xl-inline ms-1">by {{metric.target_date}}</span>
                  {%- endif -%}
                </label>
                <div class="progress position-relative" style="height: 1.1rem;">
                  {%- assign color = "warning" -%}
                  {% if metric.goal > metric.default_value %}{%- assign color = "success" -%}{% endif %}
                  {% if metric.danger < metric.default_value %}{%- assign color = "danger" -%}{% endif %}
                  <div class="progress-bar position-absolute bg-{{color}}" role="progressbar" aria-valuemin="0" aria-valuemax="100"  aria-valuenow="50" style="width: {{metric.default_value}}%; height: 1.07rem;">{{metric.default_value}}%</div>
                  {%- assign green_width = metric.goal -%}
                  <div class="progress-bar bg-trans progress-success" role="progressbar" 
                    style="width: {{green_width}}%; height: 1.07rem"></div>
                  {%- assign yellow_width = metric.danger | minus: metric.goal -%}
                  <div class="progress-bar bg-trans progress-warning" role="progressbar" 
                    style="width: {{yellow_width}}%; height: 1.07rem"></div>
                  {%- assign red_width = 100 | minus: metric.danger -%}
                  <div class="progress-bar bg-trans progress-danger" role="progressbar" 
                    style="width: {{red_width}}%; height: 1.07rem"></div>
                </div>
              </div>
              <a href="#" class="btn btn-sm me-xl-auto">Learn More</a>
            </div>
          </div>
        </div>
      {%- endfor -%}
    </div>
  </div>
</section>




















