package com.ifarm.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class CloudGatewayController {
	
	@RequestMapping("/home")
	public String returnFrontend() {
		return "redirect:/index";
	}

}
