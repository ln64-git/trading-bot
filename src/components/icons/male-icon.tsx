import { generateGradient } from "@/utils/utils";
import React from "react";

export default function MaleIcon({ color }: { color: string }) {
  const colorGradient = generateGradient(color);
  const gradientId1 = `gradient-${color.replace("#", "")}-1`;
  const gradientId2 = `gradient-${color.replace("#", "")}-2`;
  const gradientId3 = `gradient-${color.replace("#", "")}-3`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="30"
      height="30"
      viewBox="0 0 48 48"
    >
      <linearGradient
        id={gradientId1}
        x1="24"
        x2="24"
        y1="52.156"
        y2="18.098"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color={colorGradient[0]}></stop>
        <stop offset=".289" stop-color={colorGradient[1]}></stop>
        <stop offset=".593" stop-color={colorGradient[2]}></stop>
        <stop offset=".841" stop-color={colorGradient[3]}></stop>
        <stop offset="1" stop-color={colorGradient[4]}></stop>
      </linearGradient>
      <path
        fill={`url(#${gradientId1})`}
        d="M43,27.5c0-2.314-1.753-4.198-4-4.45V22c0-8.284-6.716-15-15-15S9,13.716,9,22v1.05	c-2.247,0.252-4,2.136-4,4.45c0,2.363,1.828,4.279,4.143,4.464C10.107,39.318,16.383,45,24,45s13.893-5.682,14.857-13.036	C41.172,31.779,43,29.863,43,27.5z"
      ></path>
      <path
        fill={colorGradient[0]}
        d="M28.043,17c3.125,2.37,7.523,4.024,11.699,4.687C39.582,16.929,35.786,6.25,24,6.25	c-8.647,0-15.667,6.981-15.743,15.611C15.155,21.371,21.957,19.592,28.043,17z"
        opacity=".4"
      ></path>
      <path
        fill={colorGradient[1]}
        d="M28.043,17c3.314,2.513,8.059,4.23,12.452,4.804C40.392,15.428,35.226,5.5,24,5.5	c-9.071,0-16.441,7.342-16.495,16.401C14.66,21.492,21.736,19.687,28.043,17z"
        opacity=".3"
      ></path>
      <path
        fill={colorGradient[2]}
        d="M28.043,17c3.504,2.657,8.605,4.415,13.201,4.88C41.18,13.766,34.581,4.75,24,4.75	c-9.495,0-17.215,7.704-17.247,17.191C14.164,21.621,21.515,19.781,28.043,17z"
        opacity=".2"
      ></path>
      <path
        fill={colorGradient[3]}
        d="M28.043,17c3.696,2.802,9.173,4.619,13.954,4.957C41.974,12.052,33.91,4,24,4	C14.082,4,6.011,12.065,6.001,21.981C13.666,21.759,21.294,19.875,28.043,17z"
        opacity=".1"
      ></path>
      <path
        fill={color}
        d="M33,28c0,1.105-0.895,2-2,2s-2-0.895-2-2s0.895-2,2-2S33,26.895,33,28"
      ></path>
      <path
        fill={color}
        d="M19,28c0,1.105-0.895,2-2,2s-2-0.895-2-2s0.895-2,2-2S19,26.895,19,28"
      ></path>
      <path
        fill={color}
        d="M39,23.05v-0.627c0-8.077-6.207-15.027-14.275-15.406C16.111,6.612,9,13.475,9,22v1.05	c-0.746,0.084-1.424,0.364-2.013,0.765c-0.001,0.058-0.005,0.112-0.006,0.17c3.86-0.326,10.52-0.792,19.314-4.127	c0.923-0.35,1.959-0.257,2.813,0.237c4.823,2.791,9.813,3.483,11.941,3.881c-0.001-0.047-0.006-0.091-0.007-0.138	C40.447,23.425,39.759,23.135,39,23.05z"
        opacity=".1"
      ></path>
      <path
        fill={colorGradient[4]}
        d="M39,23.05v-0.627c0-8.077-6.207-15.027-14.275-15.406C16.111,6.612,9,13.475,9,22v1.05	c-0.557,0.062-1.07,0.247-1.546,0.493c4.312-0.366,10.783-1.058,18.813-4.107c0.971-0.369,2.061-0.268,2.96,0.254	c4.189,2.429,8.613,3.28,11.082,3.741C39.898,23.248,39.466,23.103,39,23.05z"
        opacity=".15"
      ></path>
      <path
        fill={colorGradient[1]}
        d="M39,22c0-8.525-7.111-15.388-15.725-14.983C15.207,7.397,9,14.347,9,22.424v0.574	c4.602-0.451,10.489-1.409,17.258-3.988c1.015-0.386,2.15-0.267,3.088,0.28c3.379,1.968,7.02,2.932,9.654,3.478V22z"
        opacity=".2"
      ></path>
      <path
        fill={colorGradient[2]}
        d="M39,22c0-8.525-7.111-15.388-15.725-14.983C15.207,7.397,9,14.347,9,22.424v0.174	c4.988-0.479,10.842-1.573,17.152-3.977c1.121-0.427,2.369-0.276,3.406,0.326c3.173,1.841,6.689,2.846,9.442,3.413V22z"
        opacity=".25"
      ></path>
      <path
        fill={colorGradient[3]}
        d="M20.062,7.501C13.5,9.171,9,15.228,9,22v0.201c5.416-0.494,11.236-1.746,17.054-3.97	c1.189-0.455,2.504-0.334,3.601,0.312c2.955,1.74,6.379,2.823,9.343,3.413C38.971,12.412,30.032,4.964,20.062,7.501z"
        opacity=".3"
      ></path>
      <path
        fill={colorGradient[4]}
        d="M38.978,21.555c-0.104-3.53-1.424-6.754-3.557-9.266	c-0.015-0.017-0.031-0.033-0.045-0.05c-0.29-0.338-0.593-0.664-0.911-0.975c-0.038-0.037-0.079-0.07-0.117-0.106	c-0.3-0.287-0.609-0.565-0.932-0.827c-0.067-0.054-0.14-0.102-0.208-0.156c-0.301-0.235-0.607-0.466-0.927-0.678	c-0.105-0.07-0.218-0.13-0.325-0.197c-0.292-0.184-0.586-0.367-0.891-0.531c-0.147-0.078-0.301-0.143-0.451-0.217	c-0.278-0.137-0.553-0.277-0.84-0.397c-0.19-0.079-0.389-0.142-0.583-0.213c-0.258-0.095-0.512-0.198-0.777-0.279	c-0.239-0.073-0.486-0.126-0.73-0.188c-0.23-0.058-0.456-0.127-0.69-0.174c-0.306-0.062-0.619-0.099-0.931-0.142	c-0.181-0.025-0.359-0.063-0.542-0.081C25.02,7.026,24.513,7,24,7c-0.516,0-1.025,0.026-1.528,0.077	c-0.181,0.018-0.356,0.056-0.536,0.081C21.62,7.202,21.3,7.24,20.99,7.303c-0.241,0.049-0.474,0.121-0.71,0.181	c-0.24,0.061-0.484,0.112-0.719,0.185c-0.28,0.087-0.55,0.196-0.823,0.299c-0.181,0.068-0.368,0.125-0.546,0.2	c-0.309,0.13-0.605,0.282-0.903,0.431c-0.132,0.066-0.269,0.122-0.399,0.192c-0.331,0.179-0.649,0.378-0.964,0.581	c-0.086,0.055-0.178,0.103-0.263,0.16c-0.345,0.232-0.676,0.482-1,0.741c-0.047,0.038-0.099,0.071-0.146,0.109	c-0.35,0.286-0.684,0.589-1.006,0.905c-0.016,0.016-0.035,0.03-0.051,0.047c-2.706,2.677-4.397,6.378-4.45,10.474	c6.639-0.562,13.169-2.309,19.034-4.807C30.979,19.225,35.036,20.818,38.978,21.555C38.978,21.555,38.978,21.555,38.978,21.555z"
        opacity=".5"
      ></path>
      <path
        fill={colorGradient[0]}
        d="M28.043,17c2.935,2.225,6.992,3.818,10.934,4.555C38.74,13.478,32.134,7,24,7	C15.781,7,9.114,13.613,9.01,21.807C15.649,21.245,22.178,19.498,28.043,17z"
      ></path>
      <linearGradient
        id={gradientId2}
        x1="24"
        x2="24"
        y1="27.38"
        y2="-.326"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color={colorGradient[0]} stop-opacity=".4"></stop>
        <stop offset="1" stop-color={colorGradient[1]} stop-opacity=".3"></stop>
      </linearGradient>
      <path
        fill={`url(#${gradientId2})`}
        d="M24,4L24,4c-3-2-6.697-1.478-9-0.536	C8.24,6.229,5,13.614,5,21.05v0.096c0,0.469,0.386,0.855,0.854,0.843c7.714-0.202,15.397-2.095,22.189-4.989	c3.731,2.829,9.279,4.658,14.092,4.971C42.608,22.002,43,21.607,43,21.134V21.05C43,13.227,39.327,5.505,32,3	C29.991,2.313,27,2,24,4z"
      ></path>
      <linearGradient
        id={gradientId3}
        x1="24"
        x2="24"
        y1="22.015"
        y2="3.803"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stop-color="ivory" stop-opacity=".3"></stop>
        <stop offset="1" stop-color={colorGradient[4]} stop-opacity=".4"></stop>
      </linearGradient>
      <path
        fill={`url(#${gradientId3})`}
        d="M28.918,2.975	c0.972,0,1.954,0.167,2.92,0.498C38.315,5.687,42.5,12.587,42.5,21.05v0.084c0,0.183-0.143,0.338-0.331,0.338c0,0-0.001,0-0.001,0	c-4.917-0.32-10.342-2.232-13.823-4.871l-0.231-0.175l-0.267,0.114c-7.156,3.048-14.765,4.759-22.015,4.949	c-0.18,0-0.332-0.157-0.332-0.343V21.05c0-6.362,2.545-14.201,9.689-17.123c1.258-0.515,2.692-0.798,4.038-0.798	c1.702,0,3.214,0.433,4.496,1.287L24,4.601l0.277-0.185C25.711,3.46,27.273,2.975,28.918,2.975 M28.918,2.475	C27.4,2.475,25.702,2.866,24,4h0c-1.503-1.002-3.183-1.371-4.773-1.371c-1.583,0-3.078,0.365-4.227,0.835	C8.24,6.229,5,13.614,5,21.05v0.096c0,0.461,0.374,0.843,0.832,0.843c0.007,0,0.014,0,0.022,0	c7.714-0.202,15.397-2.095,22.189-4.989c3.731,2.829,9.279,4.658,14.092,4.971c0.017,0.001,0.035,0.002,0.052,0.002	c0.449,0,0.813-0.383,0.813-0.839V21.05C43,13.227,39.327,5.505,32,3C31.13,2.703,30.077,2.475,28.918,2.475L28.918,2.475z"
      ></path>
      <path
        fill={color}
        d="M19.322,36c-0.436,0-0.672,0.529-0.37,0.844C20.224,38.172,22.014,39,24,39s3.776-0.828,5.049-2.156	C29.351,36.529,29.115,36,28.678,36H19.322z"
      ></path>
    </svg>
  );
}
