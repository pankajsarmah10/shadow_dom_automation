from selenium import webdriver
from selenium.webdriver.common.by import By

#Initialize webdriver
driver = webdriver.Chrome()

#Open URL with shadow dom elements
driver.get("https://shop.polymer-project.org/")

#Locate the shadow host element (the element that hosts the shadow root)
shadow_host = driver.find_element(By.CSS_SELECTOR, "shop-app")

#Use Javascript executor to access the shadow root
shadow_root = driver.execute_script("return arguments[0].shadowRoot", shadow_host)

#Interact with elements inside the shadow root
shadow_element = shadow_root.find_element(By.CSS_SELECTOR, "shop-home")

#Validate and Print if shadow root element is displayed
print("Shadow Element is visible:", shadow_element.is_displayed())

#Quit driver
driver.quit()